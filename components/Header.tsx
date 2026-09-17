import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="border-b border-emerald-100 bg-white/80 backdrop-blur sticky top-0 z-10">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-emerald-800">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
          <Link href="/tabeawase" className="hover:text-emerald-700">
            食べ合わせチェッカー
          </Link>
          <Link href="/about" className="hover:text-emerald-700">
            運営者について
          </Link>
        </nav>
      </div>
    </header>
  );
}
