import type { CompoundId } from "./compounds";

export interface InteractionRule {
  compoundA: CompoundId;
  compoundB: CompoundId;
  type: "synergy" | "caution";
  score: number;
  mechanism: string;
  isMedicationWarning?: boolean;
}

function rule(
  compoundA: CompoundId,
  compoundB: CompoundId,
  type: "synergy" | "caution",
  score: number,
  mechanism: string,
  isMedicationWarning = false
): InteractionRule {
  return { compoundA, compoundB, type, score, mechanism, isMedicationWarning };
}

export const interactionRules: InteractionRule[] = [
  // --- 相乗効果(吸収促進・機能強化) ---
  rule("iron_nonheme", "vitamin_c", "synergy", 15, "ビタミンCが非ヘム鉄を還元し、吸収率を高める"),
  rule("iron_nonheme", "protein", "synergy", 8, "動物性タンパク質(ミートファクター)が非ヘム鉄の吸収を助ける"),
  rule("beta_carotene", "fat", "synergy", 12, "脂溶性のβカロテンは油と一緒に摂ると吸収率が上がる"),
  rule("vitamin_a", "fat", "synergy", 10, "脂溶性のビタミンAは油と一緒に摂ると吸収されやすい"),
  rule("lycopene", "fat", "synergy", 12, "脂溶性のリコピンは油と一緒に摂ると吸収率が上がる"),
  rule("vitamin_d", "calcium", "synergy", 12, "ビタミンDが腸管でのカルシウム吸収を促進する"),
  rule("vitamin_d", "magnesium", "synergy", 6, "マグネシウムはビタミンDを活性型に変える酵素の働きを助ける"),
  rule("vitamin_d", "vitamin_k", "synergy", 6, "ビタミンDとKは骨代謝(骨タンパク質の活性化)で協調して働く"),
  rule("curcumin", "piperine", "synergy", 18, "黒コショウのピペリンがクルクミンの代謝を抑え、血中濃度を大幅に高める"),
  rule("curcumin", "fat", "synergy", 10, "脂溶性のクルクミンは油と一緒に摂ると吸収率が上がる"),
  rule("catechin", "vitamin_c", "synergy", 8, "ビタミンCがカテキンの酸化を防ぎ、安定性・吸収性を高める"),
  rule("quercetin", "vitamin_c", "synergy", 8, "抗酸化作用を補い合う関係にある"),
  rule("vitamin_e", "vitamin_c", "synergy", 10, "ビタミンCが酸化されたビタミンEを再生する"),
  rule("vitamin_a", "vitamin_e", "synergy", 6, "抗酸化ビタミン同士が働きを補い合う"),
  rule("zinc", "vitamin_a", "synergy", 6, "亜鉛はビタミンAを体内で利用するために必要な酵素の働きを助ける"),
  rule("protein", "vitamin_b6", "synergy", 8, "ビタミンB6はアミノ酸を分解・再構築する代謝反応の補酵素として働く"),
  rule("zinc", "protein", "synergy", 8, "動物性タンパク質は亜鉛の吸収を助ける"),
  rule("allicin", "vitamin_b1", "synergy", 12, "にんにくのアリシンがビタミンB1と結合してアリチアミンとなり、吸収・持続性が高まる"),
  rule("isoflavone", "oligosaccharide", "synergy", 8, "オリゴ糖が腸内細菌によるイソフラボン代謝(エクオール産生)を助ける"),
  rule("lactic_acid_bacteria", "oligosaccharide", "synergy", 10, "オリゴ糖は乳酸菌のエサとなり、腸内環境を整える相乗効果がある(シンバイオティクス)"),
  rule("folate", "vitamin_b12", "synergy", 8, "葉酸とビタミンB12は共同して赤血球の生成を助ける"),
  rule("vitamin_c", "folate", "synergy", 6, "ビタミンCは葉酸を体内で活性型に保つのを助ける"),
  rule("fiber", "carb", "synergy", 6, "食物繊維は糖の吸収を緩やかにし、血糖値の急上昇を抑える"),
  rule("fiber", "fat", "synergy", 6, "食物繊維は脂質の吸収を緩やかにし、コレステロールの排出を助ける"),
  rule("magnesium", "potassium", "synergy", 4, "共に細胞内電解質として血圧調整に協調して働く"),
  rule("magnesium", "vitamin_b6", "synergy", 6, "ビタミンB6はマグネシウムの細胞内への取り込みを助けるとされる"),
  rule("anthocyanin", "vitamin_c", "synergy", 6, "抗酸化作用を補い合う関係にある"),

  // --- 要注意(吸収阻害・拮抗) ---
  rule("calcium", "oxalate", "caution", -12, "シュウ酸カルシウムを形成し、互いの吸収を妨げ合う"),
  rule("iron_nonheme", "oxalate", "caution", -4, "シュウ酸は鉄とも結合し、軽度に吸収を妨げる"),
  rule("iron_nonheme", "phytate", "caution", -15, "フィチン酸が鉄とキレート結合し、吸収を妨げる"),
  rule("zinc", "phytate", "caution", -12, "フィチン酸が亜鉛とキレート結合し、吸収を妨げる"),
  rule("calcium", "phytate", "caution", -8, "フィチン酸がカルシウムとキレート結合し、吸収を妨げる"),
  rule("iron_nonheme", "tannin", "caution", -15, "タンニンが非ヘム鉄と結合し、不溶性の複合体を作って吸収を妨げる"),
  rule("iron_nonheme", "catechin", "caution", -8, "カテキンも鉄と結合し、吸収を妨げることがある"),
  rule("zinc", "tannin", "caution", -6, "タンニンが亜鉛の吸収をわずかに妨げる"),
  rule("calcium", "iron_nonheme", "caution", -8, "カルシウムが腸管で非ヘム鉄の吸収経路と競合する"),
  rule("caffeine", "calcium", "caution", -6, "カフェインの利尿作用により、尿中へのカルシウム排泄が増える"),
  rule("caffeine", "iron_nonheme", "caution", -6, "コーヒー・茶に含まれるポリフェノールが鉄の吸収を妨げる"),
  rule("zinc", "copper", "caution", -10, "亜鉛の高用量摂取が腸管での銅の吸収と競合し、銅欠乏を招くことがある"),
  rule("tannin", "protein", "caution", -6, "タンニンがカゼイン等のタンパク質と結合し、ポリフェノールの吸収を妨げる"),
  rule("fiber", "calcium", "caution", -4, "不溶性食物繊維の過剰摂取はミネラルの吸収時間を短縮させうる"),
  rule("fiber", "zinc", "caution", -4, "不溶性食物繊維の過剰摂取は亜鉛の吸収を妨げうる"),
  rule("fiber", "iron_nonheme", "caution", -4, "不溶性食物繊維の過剰摂取は鉄の吸収を妨げうる"),
  rule("sodium", "potassium", "caution", -6, "ナトリウム過多・カリウム不足は血圧バランスを崩す要因になりうる"),
  rule("sodium", "calcium", "caution", -6, "ナトリウムの過剰摂取は尿中へのカルシウム排泄を増やす"),
  rule("alcohol", "vitamin_b1", "caution", -10, "アルコールの代謝はビタミンB1を消費し、欠乏を招きやすい"),
  rule("alcohol", "vitamin_b6", "caution", -6, "アルコール代謝の過程でビタミンB6の分解が促進され、欠乏を招きやすい"),
  rule("alcohol", "folate", "caution", -8, "慢性的なアルコール摂取は葉酸の吸収・代謝を妨げる"),
  rule("oxalate", "magnesium", "caution", -4, "シュウ酸はマグネシウムの吸収もわずかに妨げる"),

  // --- 医薬品との飲み合わせ警告(スコアには加算せず、常に別枠で警告表示) ---
  rule(
    "vitamin_k",
    "warfarin",
    "caution",
    -25,
    "ビタミンKが血液凝固阻止薬(ワーファリン)の効果を弱め、血栓症のリスクを高めることがある。特に納豆はビタミンK2を持続的に作り出すため影響が大きい",
    true
  ),
  rule(
    "furanocoumarin",
    "cyp3a4_substrate_drug",
    "caution",
    -25,
    "グレープフルーツ等のフラノクマリン類が薬物代謝酵素CYP3A4を阻害し、薬の血中濃度を想定以上に高めることがある",
    true
  ),
  rule(
    "tyramine",
    "maoi_drug",
    "caution",
    -25,
    "チーズ・熟成食品等に含まれるチラミンが、MAO阻害薬服用中に急激な血圧上昇(高血圧クリーゼ)を招くことがある",
    true
  ),
  rule(
    "calcium",
    "tetracycline_quinolone_drug",
    "caution",
    -20,
    "カルシウムが抗菌薬とキレートを形成し、薬の吸収を妨げて効果を弱めることがある",
    true
  ),
  rule(
    "magnesium",
    "tetracycline_quinolone_drug",
    "caution",
    -20,
    "マグネシウムも同様に抗菌薬とキレートを形成し、吸収を妨げることがある",
    true
  ),
  rule(
    "iron_nonheme",
    "tetracycline_quinolone_drug",
    "caution",
    -20,
    "鉄も抗菌薬の吸収を妨げ、効果を弱めることがある",
    true
  ),
];

export function findRules(
  compoundsA: CompoundId[],
  compoundsB: CompoundId[]
): InteractionRule[] {
  const setA = new Set(compoundsA);
  const setB = new Set(compoundsB);
  return interactionRules.filter(
    (r) =>
      (setA.has(r.compoundA) && setB.has(r.compoundB)) ||
      (setA.has(r.compoundB) && setB.has(r.compoundA))
  );
}
