import type { FoodItem } from "./foods";

// https://affiliate.amazon.co.jp/ で取得したトラッキングID
export const AMAZON_ASSOCIATE_TAG = "tabeawaselabo-22";

// Amazonで実際に購入される商品ジャンルのみアフィリエイトリンクを出す。
// 生鮮食品(野菜・果物・肉・魚介・卵乳製品・きのこ)や医薬品は対象外。
const PURCHASABLE_CATEGORIES = new Set([
  "サプリメント",
  "調味料・香辛料",
  "飲料",
  "種実類",
  "海藻類",
  "豆類・大豆製品",
  "穀物・いも類",
]);

export function isPurchasable(food: FoodItem): boolean {
  return PURCHASABLE_CATEGORIES.has(food.category);
}

/** Amazon検索結果ページへのアフィリエイトリンク(商品個別のASIN登録が不要な方式) */
export function getAmazonSearchUrl(query: string): string {
  const params = new URLSearchParams({
    k: query,
    tag: AMAZON_ASSOCIATE_TAG,
  });
  return `https://www.amazon.co.jp/s?${params.toString()}`;
}
