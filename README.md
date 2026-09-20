# タベアワセラボ

科学的根拠にもとづく食べ合わせ・栄養情報サイト(Next.js製)。詳しい企画背景は `C:\Users\tadas\.claude\plans\sprightly-doodling-perlis.md` を参照。

## ローカル開発

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

> **注意**: このプロジェクトは OneDrive 同期フォルダ内にあるため、デフォルトの Turbopack 開発サーバーはファイル監視でクラッシュすることがあります(`RangeError: Map maximum size exceeded`)。そのため `package.json` の `dev` スクリプトは `next dev --webpack` に固定しています。本番ビルド(`next build`)は Turbopack のままで問題なく動作します。

## 実装済みの内容

- トップページ、`/tabeawase`(チェッカー+一覧)、`/tabeawase/[slug]`(詳細、20件を静的生成)
- `/about`、`/privacy`、`/contact`
- `sitemap.xml`、`robots.txt`
- 食べ合わせデータは `lib/tabeawase-data.ts` に集約(新しい組み合わせを増やす際はここに追記するだけでよい)
- サイト名・ペンネーム・紹介文などの設定は `lib/site-config.ts`

## 次にやること(ユーザー側の作業)

1. **公開前のファクトチェック**: `lib/tabeawase-data.ts` の20件は一般的な栄養生化学の知見をもとにClaudeが下書きしたものです。専門知識を活かして内容の正確性を確認・修正してから公開してください。特に医薬品相互作用(グレープフルーツ、ワーファリン)の項目は表現に注意してください。
2. **ドメイン取得**: 取得後、`lib/site-config.ts` の `url` を実際のドメインに差し替える。
3. **お問い合わせ用メールアドレス**: `app/contact/page.tsx` の `contactEmail` を、サイト用に新規取得したメールアドレスに差し替える(個人のメールアドレスは公開しない想定)。
4. **Amazonアソシエイト登録**: [affiliate.amazon.co.jp](https://affiliate.amazon.co.jp/) で登録後、`lib/affiliate.ts` の `AMAZON_ASSOCIATE_TAG` を取得したトラッキングIDに差し替える(サプリ・調味料・飲料・種実類等のスコア結果に「関連商品」リンクとして表示される)。審査には数件の実売上実績が必要な場合があるため、リンク設置→アクセス開始後に申請するのが現実的。
5. **GitHubリポジトリ作成 → Vercelに接続**:
   - GitHubで新規リポジトリを作成し、このフォルダをpush
   - [vercel.com](https://vercel.com) でGitHubリポジトリをインポートするとビルド・デプロイが自動化される
   - 取得したドメインをVercelのプロジェクト設定でカスタムドメインとして接続
6. **Google Search Console** にサイトを登録し、`sitemap.xml` を送信
7. **Google AdSense** は、ある程度コンテンツ量とアクセスが増えてから申請(目安: 記事30本以上、独自性のある内容)。審査に通ったら実際の広告コードを組み込む
8. コンテンツの追加(食べ合わせデータの拡充、関連記事の追加)を継続してSEO評価を積み上げる

## 技術構成

- Next.js 16 (App Router) / TypeScript / Tailwind CSS v4
- ホスティングはVercelを想定(無料枠で開始可能)
