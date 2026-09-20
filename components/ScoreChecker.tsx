"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { foods, type FoodItem } from "@/lib/foods";
import { scorePair, getScoreBand, type ScoreResult } from "@/lib/scoring";

function FoodPicker({
  label,
  value,
  onChange,
}: {
  label: string;
  value: FoodItem | null;
  onChange: (food: FoodItem | null) => void;
}) {
  const [query, setQuery] = useState(value?.name ?? "");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim();
    if (!q) return foods.slice(0, 20);
    return foods.filter((f) => f.name.includes(q)).slice(0, 20);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex-1" ref={containerRef}>
      <label className="text-sm font-medium text-slate-700">
        {label}
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            if (value) onChange(null);
          }}
          onFocus={() => setOpen(true)}
          placeholder="食品・サプリ名で検索"
          className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
          autoComplete="off"
        />
      </label>
      {open && filtered.length > 0 && (
        <ul className="absolute z-20 mt-1 max-h-64 w-full overflow-y-auto rounded-lg border border-slate-200 bg-white shadow-lg">
          {filtered.map((f) => (
            <li key={f.id}>
              <button
                type="button"
                onClick={() => {
                  onChange(f);
                  setQuery(f.name);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-emerald-50"
              >
                <span>{f.name}</span>
                <span className="text-xs text-slate-400">{f.category}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const scoreBandStyle = {
  good: "text-emerald-700 bg-emerald-50 border-emerald-300",
  neutral: "text-amber-700 bg-amber-50 border-amber-300",
  caution: "text-rose-700 bg-rose-50 border-rose-300",
} as const;

const scoreBandText = {
  good: "相性の良い組み合わせ",
  neutral: "特に問題のない組み合わせ",
  caution: "吸収を妨げる可能性がある組み合わせ",
} as const;

export default function ScoreChecker() {
  const [foodA, setFoodA] = useState<FoodItem | null>(null);
  const [foodB, setFoodB] = useState<FoodItem | null>(null);
  const [result, setResult] = useState<ScoreResult | null>(null);

  function handleCheck() {
    if (!foodA || !foodB) return;
    setResult(scorePair(foodA, foodB));
  }

  const band = result ? getScoreBand(result.score) : null;

  return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <FoodPicker
          label="食品A"
          value={foodA}
          onChange={(f) => {
            setFoodA(f);
            setResult(null);
          }}
        />
        <FoodPicker
          label="食品B"
          value={foodB}
          onChange={(f) => {
            setFoodB(f);
            setResult(null);
          }}
        />
        <button
          type="button"
          onClick={handleCheck}
          disabled={!foodA || !foodB}
          className="rounded-full bg-emerald-700 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          スコアを計算する
        </button>
      </div>
      <p className="mt-2 text-xs text-slate-400">
        登録食品・サプリ{foods.length}件から検索できます。スコアは栄養素の組み合わせから算出した方向性の目安であり、精密な分析値ではありません。
      </p>

      {result && band && (
        <div className="mt-5 rounded-xl bg-white p-5">
          {result.medicationWarnings.length > 0 && (
            <div className="mb-4 rounded-lg border border-rose-300 bg-rose-50 p-4">
              <p className="text-sm font-bold text-rose-800">
                医薬品との飲み合わせに注意
              </p>
              <ul className="mt-2 space-y-1 text-sm text-rose-700">
                {result.medicationWarnings.map((w, i) => (
                  <li key={i}>{w.mechanism}</li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-rose-600">
                持病や服薬中の方は自己判断せず、必ず医師・薬剤師にご相談ください。
              </p>
            </div>
          )}

          <div className="flex items-center gap-4">
            <div
              className={`flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-4 text-2xl font-bold ${scoreBandStyle[band]}`}
            >
              {result.score}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {foodA?.name} × {foodB?.name}
              </p>
              <p className="text-xs text-slate-500">{scoreBandText[band]}</p>
            </div>
          </div>

          {result.breakdown.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {result.breakdown.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2 text-sm"
                >
                  <span className="text-slate-600">{b.rule.mechanism}</span>
                  <span
                    className={`flex-shrink-0 font-semibold ${b.contribution > 0 ? "text-emerald-700" : "text-rose-700"}`}
                  >
                    {b.contribution > 0 ? "+" : ""}
                    {b.contribution}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-slate-500">
              この組み合わせについて、データベースに登録されている特筆すべき相互作用は見つかりませんでした。
            </p>
          )}

          {result.relatedArticleSlug && (
            <Link
              href={`/tabeawase/${result.relatedArticleSlug}`}
              className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:underline"
            >
              この組み合わせの詳しい解説記事を読む →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
