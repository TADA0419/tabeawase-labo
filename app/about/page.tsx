import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "運営者について",
  description: `${siteConfig.name}の運営方針と運営者プロフィール。`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-bold text-slate-900">運営者について</h1>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-slate-900">プロフィール</h2>
        <div className="mt-3 rounded-xl border border-slate-200 p-5">
          <p className="font-semibold text-slate-900">{siteConfig.authorName}</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            {siteConfig.authorBio}
          </p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-slate-900">
          {siteConfig.name}の運営方針
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          世の中には「一緒に食べてはいけない」「体に良い」といった食べ合わせの情報が数多くありますが、その多くは経験則や言い伝えにとどまり、科学的な裏付けが示されていないものも少なくありません。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {siteConfig.name}では、栄養素の吸収・代謝に関わる生化学的なメカニズムを可能な限り具体的に説明し、根拠が乏しい俗説についても「なぜそう言われてきたのか」「科学的に見るとどうなのか」を整理してお伝えすることを心がけています。
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-slate-900">ご利用にあたって</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          当サイトの情報は一般的な栄養学・生化学の知見にもとづく情報提供を目的としており、個別の医学的な診断・治療・薬の使用に関するアドバイスを行うものではありません。持病がある方、薬を服用中の方、妊娠中・授乳中の方は、食事内容を変更する前に必ず医師・薬剤師・管理栄養士にご相談ください。
        </p>
      </section>
    </div>
  );
}
