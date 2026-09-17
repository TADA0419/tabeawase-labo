import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllSlugs,
  getPairBySlug,
  getRelatedPairs,
  relationLabel,
  relationColor,
} from "@/lib/tabeawase-data";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/tabeawase/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const pair = getPairBySlug(slug);
  if (!pair) return {};

  return {
    title: pair.title,
    description: pair.summary,
    openGraph: {
      title: `${pair.title} | ${siteConfig.name}`,
      description: pair.summary,
    },
  };
}

export default async function TabeawaseDetailPage(
  props: PageProps<"/tabeawase/[slug]">
) {
  const { slug } = await props.params;
  const pair = getPairBySlug(slug);
  if (!pair) notFound();

  const related = getRelatedPairs(pair);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `${pair.foodA}と${pair.foodB}の食べ合わせは？`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${pair.summary} ${pair.mechanism}`,
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="text-xs text-slate-400">
        <Link href="/tabeawase" className="hover:text-emerald-700">
          食べ合わせチェッカー
        </Link>{" "}
        / {pair.title}
      </nav>

      <span
        className={`mt-4 inline-block rounded-full border px-3 py-1 text-xs font-medium ${relationColor[pair.relation]}`}
      >
        {relationLabel[pair.relation]}
      </span>
      <h1 className="mt-3 text-2xl font-bold text-slate-900">{pair.title}</h1>
      <p className="mt-2 text-base leading-7 text-slate-700">{pair.summary}</p>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-slate-900">
          科学的なメカニズム
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          {pair.mechanism}
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50/40 p-5">
        <h2 className="text-lg font-bold text-slate-900">実生活での目安</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          {pair.practicalTip}
        </p>
      </section>

      <div className="mt-6 flex flex-wrap gap-2">
        {pair.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500"
          >
            #{tag}
          </span>
        ))}
      </div>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-bold text-slate-900">関連する食べ合わせ</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/tabeawase/${r.slug}`}
                  className="block h-full rounded-xl border border-slate-200 p-4 transition-colors hover:border-emerald-300 hover:bg-emerald-50/40"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {r.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {r.summary}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className="mt-12 text-xs leading-6 text-slate-400">
        本記事は一般的な栄養学・生化学の知見に基づく情報提供を目的としており、医学的な診断・治療を目的としたものではありません。持病や服薬中の方は自己判断せず、必ず医師・薬剤師にご相談ください。
      </p>
    </div>
  );
}
