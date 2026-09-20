import type { CompoundId } from "./compounds";
import type { FoodItem, TraitLevel } from "./foods";
import { interactionRules, type InteractionRule } from "./interaction-rules";
import { findPairByFoods } from "./tabeawase-data";

const BASELINE = 70;

// 「この成分は、この量くらいあれば栄養学的に意味のある量」という目安値。
// 定量データ(mg/g等)をこの値で割って 0〜1 の重みに変換する。簡略化したモデルであり、
// 年齢・性別ごとの推奨量(RDA/DRI)そのものではない。
const referenceAmount: Partial<Record<CompoundId, number>> = {
  protein: 15,
  fat: 10,
  carb: 30,
  fiber: 3,
  oligosaccharide: 1,
  vitamin_a: 300,
  beta_carotene: 1500,
  vitamin_b1: 0.3,
  vitamin_b2: 0.3,
  vitamin_b6: 0.3,
  vitamin_b12: 1,
  folate: 100,
  vitamin_c: 50,
  vitamin_d: 3,
  vitamin_e: 2,
  vitamin_k: 50,
  calcium: 150,
  iron_heme: 1.5,
  iron_nonheme: 3,
  zinc: 2,
  magnesium: 80,
  potassium: 400,
  sodium: 500,
  copper: 0.3,
  alcohol: 10,
};

const TRAIT_WEIGHT: Record<TraitLevel, number> = {
  low: 0.3,
  medium: 0.6,
  high: 1.0,
};

function getCompoundWeights(item: FoodItem): Partial<Record<CompoundId, number>> {
  const weights: Partial<Record<CompoundId, number>> = {};

  for (const [compound, amount] of Object.entries(item.nutrients) as [
    CompoundId,
    number,
  ][]) {
    const ref = referenceAmount[compound];
    if (!ref || amount === undefined) continue;
    const w = Math.max(0, Math.min(1, amount / ref));
    if (w > 0) weights[compound] = Math.max(weights[compound] ?? 0, w);
  }

  for (const [compound, level] of Object.entries(item.traits) as [
    CompoundId,
    TraitLevel,
  ][]) {
    if (!level) continue;
    const w = TRAIT_WEIGHT[level];
    weights[compound] = Math.max(weights[compound] ?? 0, w);
  }

  return weights;
}

export interface ScoreBreakdownItem {
  rule: InteractionRule;
  contribution: number;
}

export interface ScoreResult {
  score: number;
  breakdown: ScoreBreakdownItem[];
  medicationWarnings: InteractionRule[];
  relatedArticleSlug?: string;
}

export function scorePair(foodA: FoodItem, foodB: FoodItem): ScoreResult {
  const weightsA = getCompoundWeights(foodA);
  const weightsB = getCompoundWeights(foodB);

  const breakdown: ScoreBreakdownItem[] = [];
  const medicationWarnings: InteractionRule[] = [];
  let rawDelta = 0;

  for (const r of interactionRules) {
    let wA: number | undefined;
    let wB: number | undefined;

    if (weightsA[r.compoundA] !== undefined && weightsB[r.compoundB] !== undefined) {
      wA = weightsA[r.compoundA];
      wB = weightsB[r.compoundB];
    } else if (
      weightsA[r.compoundB] !== undefined &&
      weightsB[r.compoundA] !== undefined
    ) {
      wA = weightsA[r.compoundB];
      wB = weightsB[r.compoundA];
    }

    if (wA === undefined || wB === undefined) continue;

    const contribution = r.score * wA * wB;

    if (r.isMedicationWarning) {
      medicationWarnings.push(r);
      continue;
    }

    if (Math.abs(contribution) < 0.5) continue;

    breakdown.push({ rule: r, contribution: Math.round(contribution) });
    rawDelta += contribution;
  }

  breakdown.sort((a, b) => b.contribution - a.contribution);

  const score = Math.max(0, Math.min(100, Math.round(BASELINE + rawDelta)));

  const relatedArticle = findPairByFoods(foodA.name, foodB.name);

  return {
    score,
    breakdown,
    medicationWarnings,
    relatedArticleSlug: relatedArticle?.slug,
  };
}

export type ScoreBand = "good" | "neutral" | "caution";

export function getScoreBand(score: number): ScoreBand {
  if (score >= 80) return "good";
  if (score >= 50) return "neutral";
  return "caution";
}
