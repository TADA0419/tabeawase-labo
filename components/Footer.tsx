import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-emerald-50/50">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-8 text-sm text-slate-500">
        <p>
          {siteConfig.name}は栄養科学の一般的な情報提供を目的としており、医学的な診断・治療・アドバイスを目的としたものではありません。持病や服薬中の方は自己判断せず、必ず医師・薬剤師にご相談ください。
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/about" className="hover:text-emerald-700">
            運営者について
          </Link>
          <Link href="/privacy" className="hover:text-emerald-700">
            プライバシーポリシー
          </Link>
          <Link href="/contact" className="hover:text-emerald-700">
            お問い合わせ
          </Link>
        </div>
        <p className="text-xs text-slate-400">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
