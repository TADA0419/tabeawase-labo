import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${siteConfig.name}のプライバシーポリシー。`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-bold text-slate-900">
        プライバシーポリシー
      </h1>

      <section className="mt-8 space-y-6 text-sm leading-7 text-slate-600">
        <p>
          {siteConfig.name}(以下、「当サイト」といいます)は、利用者のプライバシーを尊重し、個人情報の保護に努めます。本ページでは、当サイトにおける情報の取り扱いについて説明します。
        </p>

        <div>
          <h2 className="text-base font-bold text-slate-900">
            アクセス解析ツールについて
          </h2>
          <p className="mt-2">
            当サイトは、Googleアナリティクス等のアクセス解析ツールを利用する場合があります。これらのツールはCookieを使用してデータを収集しますが、氏名や住所など個人を特定する情報は含まれません。収集されたデータは各ツールの提供事業者のプライバシーポリシーに基づき管理されます。
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900">広告について</h2>
          <p className="mt-2">
            当サイトは、第三者配信の広告サービス(Googleアドセンス等)を利用する場合があります。広告配信事業者は、利用者の興味に応じた広告を表示するためにCookieを使用することがあります。Cookieを無効にする設定については、Googleの広告設定や各ブラウザの設定をご確認ください。
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900">
            アフィリエイトプログラムについて
          </h2>
          <p className="mt-2">
            当サイトは、Amazonアソシエイト等のアフィリエイトプログラムに参加する場合があります。商品リンクを経由した購入により、当サイトが紹介料を得ることがあります。
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900">免責事項</h2>
          <p className="mt-2">
            当サイトの情報は一般的な情報提供を目的としており、内容の正確性・完全性を保証するものではありません。当サイトの情報を利用したことにより生じたいかなる損害についても、運営者は責任を負いかねます。医学的な判断が必要な場合は、必ず医師・薬剤師等の専門家にご相談ください。
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900">
            お問い合わせ
          </h2>
          <p className="mt-2">
            本ポリシーに関するお問い合わせは、お問い合わせページよりご連絡ください。
          </p>
        </div>

        <p className="text-xs text-slate-400">最終更新日: 2026年9月</p>
      </section>
    </div>
  );
}
