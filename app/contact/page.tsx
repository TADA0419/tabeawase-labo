import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${siteConfig.name}へのお問い合わせ。`,
};

// TODO: サイト用に新規取得したメールアドレスに差し替える(個人のメールアドレスは公開しない)
const contactEmail = "contact@example.com";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-bold text-slate-900">お問い合わせ</h1>
      <p className="mt-4 text-sm leading-7 text-slate-600">
        記事内容の誤りのご指摘、ご感想、掲載情報についてのお問い合わせは、以下のメールアドレスまでご連絡ください。内容を確認のうえ、順次対応いたします。
      </p>
      <p className="mt-6">
        <a
          href={`mailto:${contactEmail}`}
          className="inline-block rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
        >
          {contactEmail}
        </a>
      </p>
      <p className="mt-8 text-xs leading-6 text-slate-400">
        医学的な個別相談(特定の症状や薬との飲み合わせに関するご質問など)にはお答えできません。必ず医師・薬剤師にご相談ください。
      </p>
    </div>
  );
}
