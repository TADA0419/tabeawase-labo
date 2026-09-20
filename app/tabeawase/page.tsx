import type { Metadata } from "next";
import Link from "next/link";
import ScoreChecker from "@/components/ScoreChecker";
import {
  foodPairs,
  relationLabel,
  relationColor,
  type Relation,
} from "@/lib/tabeawase-data";
import { foods } from "@/lib/foods";

export const metadata: Metadata = {
  title: "食べ合わせスコアチェッカー",
  description: `食品・サプリを2つ選ぶだけで、栄養素同士の相性を100点満点でスコア化。登録食品${foods.length}件、内訳も全て表示します。`,
};

const categories: { relation: Relation; description: string }[] = [
  {
    relation: "synergy",
    description: "一緒に摂ることで栄養の吸収効率が上がる組み合わせ",
  },
  {
    relation: "caution",
    description: "吸収を妨げたり、飲み合わせに注意が必要な組み合わせ",
  },
  {
    relation: "myth",
    description: "昔からの言い伝えを科学的に検証した組み合わせ",
  },
];

export default function TabeawasePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-bold text-slate-900">
        食べ合わせスコアチェッカー
      </h1>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        食品・サプリを2つ選ぶと、含まれる栄養素同士の相性を100点満点でスコア化します。加点・減点の内訳もすべて表示するので、なぜそのスコアになったのかが分かります。
      </p>

      <div className="mt-6">
        <ScoreChecker />
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-bold text-slate-900">人気の食べ合わせ解説</h2>
        <p className="mt-1 text-sm text-slate-500">
          科学的な背景をじっくり読みたい方向けの詳細記事です。
        </p>
      </section>

      {categories.map(({ relation, description }) => {
        const pairs = foodPairs.filter((p) => p.relation === relation);
        return (
          <section key={relation} className="mt-12">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-bold text-slate-900">
                {relationLabel[relation]}
              </h2>
              <span
                className={`rounded-full border px-2 py-0.5 text-xs font-medium ${relationColor[relation]}`}
              >
                {pairs.length}件
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-500">{description}</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {pairs.map((pair) => (
                <li key={pair.slug}>
                  <Link
                    href={`/tabeawase/${pair.slug}`}
                    className="block h-full rounded-xl border border-slate-200 p-4 transition-colors hover:border-emerald-300 hover:bg-emerald-50/40"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {pair.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {pair.summary}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
