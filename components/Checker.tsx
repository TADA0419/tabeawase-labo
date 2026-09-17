"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  findPairByFoods,
  getAllFoodNames,
  relationLabel,
  relationColor,
} from "@/lib/tabeawase-data";

export default function Checker() {
  const foods = useMemo(() => getAllFoodNames(), []);
  const [foodA, setFoodA] = useState("");
  const [foodB, setFoodB] = useState("");
  const [checked, setChecked] = useState(false);

  const result = checked && foodA && foodB ? findPairByFoods(foodA, foodB) : undefined;

  function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    setChecked(true);
  }

  return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6">
      <form onSubmit={handleCheck} className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <label className="flex-1 text-sm font-medium text-slate-700">
          食品A
          <select
            value={foodA}
            onChange={(e) => {
              setFoodA(e.target.value);
              setChecked(false);
            }}
            className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
          >
            <option value="">選択してください</option>
            {foods.map((food) => (
              <option key={food} value={food}>
                {food}
              </option>
            ))}
          </select>
        </label>
        <label className="flex-1 text-sm font-medium text-slate-700">
          食品B
          <select
            value={foodB}
            onChange={(e) => {
              setFoodB(e.target.value);
              setChecked(false);
            }}
            className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
          >
            <option value="">選択してください</option>
            {foods.map((food) => (
              <option key={food} value={food}>
                {food}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          disabled={!foodA || !foodB}
          className="rounded-full bg-emerald-700 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          チェックする
        </button>
      </form>

      {checked && (
        <div className="mt-5 rounded-xl bg-white p-4">
          {result ? (
            <Link href={`/tabeawase/${result.slug}`} className="block">
              <span
                className={`inline-block rounded-full border px-2 py-0.5 text-xs font-medium ${relationColor[result.relation]}`}
              >
                {relationLabel[result.relation]}
              </span>
              <p className="mt-2 text-base font-bold text-slate-900">
                {result.title}
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {result.summary}
              </p>
              <span className="mt-2 inline-block text-sm font-semibold text-emerald-700">
                詳しく見る →
              </span>
            </Link>
          ) : (
            <p className="text-sm text-slate-500">
              「{foodA}」×「{foodB}」の組み合わせデータはまだありません。下の一覧から他の組み合わせをチェックしてみてください。
            </p>
          )}
        </div>
      )}
    </div>
  );
}
