import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { foodPairs, relationLabel, relationColor } from "@/lib/tabeawase-data";
import { foods } from "@/lib/foods";

export default function Home() {
  const pickup = foodPairs.slice(0, 6);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <section className="rounded-2xl bg-gradient-to-br from-emerald-50 to-white p-8 text-center sm:p-12">
        <p className="mb-3 text-sm font-semibold text-emerald-700">
          {siteConfig.tagline}
        </p>
        <h1 className="text-2xl font-bold leading-relaxed text-slate-900 sm:text-3xl">
          その食べ合わせ、
          <br className="sm:hidden" />
          栄養学的に本当に正しい？
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
          {siteConfig.description}
          「なんとなく体に良い・悪い」で終わらせず、吸収・代謝のメカニズムまで踏み込んで解説します。
        </p>
        <Link
          href="/tabeawase"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
        >
          食べ合わせスコアを計算してみる
        </Link>
        <p className="mt-2 text-xs text-slate-400">
          登録食品・サプリ{foods.length}件から2つ選ぶだけ
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-bold text-slate-900">
          解説記事ピックアップ
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {pickup.map((pair) => (
            <Link
              key={pair.slug}
              href={`/tabeawase/${pair.slug}`}
              className="rounded-xl border border-slate-200 p-4 transition-colors hover:border-emerald-300 hover:bg-emerald-50/40"
            >
              <span
                className={`inline-block rounded-full border px-2 py-0.5 text-xs font-medium ${relationColor[pair.relation]}`}
              >
                {relationLabel[pair.relation]}
              </span>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                {pair.title}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                {pair.summary}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/tabeawase"
            className="text-sm font-semibold text-emerald-700 hover:underline"
          >
            すべての食べ合わせを見る →
          </Link>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-slate-200 p-6">
        <h2 className="text-lg font-bold text-slate-900">
          {siteConfig.name}について
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          運営者は分子生物学専攻の大学院修了後、製薬企業での研究関連業務を経験。専門知識を活かし、俗説ではなく吸収・代謝のメカニズムに基づいた食べ合わせ情報をお届けしています。
        </p>
        <Link
          href="/about"
          className="mt-3 inline-block text-sm font-semibold text-emerald-700 hover:underline"
        >
          運営者について詳しく見る →
        </Link>
      </section>
    </div>
  );
}
