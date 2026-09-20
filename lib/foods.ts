import type { CompoundId } from "./compounds";

export type TraitLevel = "low" | "medium" | "high";

export interface FoodItem {
  id: string;
  name: string;
  category: string;
  nutrients: Partial<Record<CompoundId, number>>;
  traits: Partial<Record<CompoundId, TraitLevel>>;
}

function food(
  id: string,
  name: string,
  category: string,
  nutrients: Partial<Record<CompoundId, number>> = {},
  traits: Partial<Record<CompoundId, TraitLevel>> = {}
): FoodItem {
  return { id, name, category, nutrients, traits };
}

// 栄養価は 文部科学省「日本食品標準成分表(八訂)増補2023年」を参考にした
// 可食部100gあたりのおおよその目安値(サプリ・調味料・飲料は1回の目安摂取量あたり)。
// 相互作用の方向性を示す教育的なツールのためのデータであり、厳密な分析値ではない。
// 公開前に要ファクトチェック。

export const foods: FoodItem[] = [
  // ===== 野菜 =====
  food("hourensou", "ほうれん草", "野菜", { iron_nonheme: 2.0, vitamin_c: 35, folate: 210, potassium: 690, beta_carotene: 4200, vitamin_k: 270 }, { oxalate: "high" }),
  food("ninjin", "にんじん", "野菜", { beta_carotene: 6900, vitamin_a: 720, fiber: 2.4, potassium: 270 }),
  food("broccoli", "ブロッコリー", "野菜", { vitamin_c: 140, folate: 220, fiber: 5.1, vitamin_k: 210, iron_nonheme: 1.3 }),
  food("tomato", "トマト", "野菜", { vitamin_c: 15, potassium: 210, fiber: 1.0 }, { lycopene: "high" }),
  food("piman", "ピーマン", "野菜", { vitamin_c: 76, beta_carotene: 400, fiber: 2.3 }),
  food("paprika", "パプリカ(赤)", "野菜", { vitamin_c: 170, beta_carotene: 1100 }),
  food("cabbage", "キャベツ", "野菜", { vitamin_c: 41, vitamin_k: 78, fiber: 1.8 }),
  food("lettuce", "レタス", "野菜", { potassium: 200, folate: 73, fiber: 1.1 }),
  food("kyuri", "きゅうり", "野菜", { potassium: 200, fiber: 1.1 }),
  food("nasu", "なす", "野菜", { potassium: 220, fiber: 2.2 }, { anthocyanin: "medium" }),
  food("tamanegi", "玉ねぎ", "野菜", { fiber: 1.6, oligosaccharide: 2.0, potassium: 150 }, { quercetin: "high" }),
  food("ninniku", "にんにく", "野菜", { vitamin_b6: 1.5, potassium: 530 }, { allicin: "high" }),
  food("shouga", "しょうが", "野菜", { potassium: 270, magnesium: 27 }),
  food("kabocha", "かぼちゃ", "野菜", { beta_carotene: 4000, vitamin_c: 43, potassium: 450, fiber: 3.5 }),
  food("daikon", "大根", "野菜", { vitamin_c: 12, potassium: 230, fiber: 1.4 }),
  food("gobo", "ごぼう", "野菜", { fiber: 5.7, potassium: 320, oligosaccharide: 3.0 }),
  food("renkon", "れんこん", "野菜", { vitamin_c: 48, fiber: 2.0, potassium: 440 }),
  food("asparagus", "アスパラガス", "野菜", { folate: 190, vitamin_k: 43, fiber: 1.8, potassium: 270 }),
  food("celery", "セロリ", "野菜", { potassium: 410, fiber: 1.5, sodium: 28 }),
  food("moyashi", "もやし", "野菜", { vitamin_c: 8, fiber: 1.3, potassium: 69 }),
  food("nira", "ニラ", "野菜", { beta_carotene: 3500, vitamin_c: 19, vitamin_k: 180 }, { allicin: "medium" }),
  food("komatsuna", "小松菜", "野菜", { calcium: 170, iron_nonheme: 2.8, beta_carotene: 3100, vitamin_c: 39, vitamin_k: 210 }),
  food("mizuna", "水菜", "野菜", { calcium: 210, vitamin_c: 55, beta_carotene: 1300 }),
  food("okra", "オクラ", "野菜", { fiber: 5.0, calcium: 92, magnesium: 51 }),
  food("goya", "ゴーヤ", "野菜", { vitamin_c: 76, fiber: 2.6 }),
  food("sayaingen", "さやいんげん", "野菜", { fiber: 2.4, folate: 50, vitamin_c: 8 }),
  food("cauliflower", "カリフラワー", "野菜", { vitamin_c: 81, fiber: 2.9, folate: 94 }),
  food("hakusai", "白菜", "野菜", { vitamin_c: 19, potassium: 220, fiber: 1.3 }),
  food("kabu", "かぶ", "野菜", { vitamin_c: 19, potassium: 280, fiber: 1.5 }),
  food("myoga", "みょうが", "野菜", { potassium: 210, calcium: 25 }),

  // ===== 果物 =====
  food("lemon", "レモン", "果物", { vitamin_c: 100, potassium: 130 }),
  food("mikan", "みかん", "果物", { vitamin_c: 32, beta_carotene: 1000, potassium: 150 }),
  food("orange", "オレンジ", "果物", { vitamin_c: 60, folate: 32, potassium: 180 }),
  food("ichigo", "いちご", "果物", { vitamin_c: 62, folate: 90, potassium: 170 }, { anthocyanin: "medium" }),
  food("kiwi", "キウイ", "果物", { vitamin_c: 71, vitamin_e: 1.3, potassium: 300, fiber: 2.6 }),
  food("banana", "バナナ", "果物", { potassium: 360, vitamin_b6: 0.38, fiber: 1.1 }),
  food("ringo", "りんご", "果物", { fiber: 1.9, potassium: 120 }, { quercetin: "medium" }),
  food("budou", "ぶどう", "果物", { potassium: 130, carb: 16 }, { anthocyanin: "medium" }),
  food("suika", "スイカ", "果物", { potassium: 120, vitamin_c: 10 }, { lycopene: "medium" }),
  food("kaki", "柿", "果物", { vitamin_c: 70, beta_carotene: 420, fiber: 1.6 }, { tannin: "medium" }),
  food("nashi", "梨", "果物", { potassium: 140, fiber: 0.9 }),
  food("momo", "桃", "果物", { potassium: 180, fiber: 1.3 }),
  food("pineapple", "パイナップル", "果物", { vitamin_c: 35, potassium: 150 }),
  food("grapefruit", "グレープフルーツ", "果物", { vitamin_c: 36, potassium: 140 }, { furanocoumarin: "high" }),
  food("avocado", "アボカド", "果物", { vitamin_e: 3.3, fiber: 5.6, potassium: 590, fat: 18, folate: 83 }),
  food("mango", "マンゴー", "果物", { beta_carotene: 610, vitamin_c: 20, folate: 84 }),
  food("blueberry", "ブルーベリー", "果物", { fiber: 3.3, vitamin_e: 1.7 }, { anthocyanin: "high" }),
  food("cherry", "さくらんぼ", "果物", { potassium: 210, vitamin_c: 10 }),
  food("melon", "メロン", "果物", { potassium: 340, vitamin_c: 25 }),
  food("umeboshi", "梅干し", "果物", { sodium: 7200, potassium: 220 }),

  // ===== 穀物・いも類 =====
  food("hakumai", "白米", "穀物・いも類", { carb: 77, protein: 6.1 }),
  food("genmai", "玄米", "穀物・いも類", { carb: 71, protein: 6.8, fiber: 3.0, magnesium: 110, vitamin_b1: 0.41 }, { phytate: "high" }),
  food("shokupan", "食パン", "穀物・いも類", { carb: 47, protein: 9.3, sodium: 470 }),
  food("zenryufun_pan", "全粒粉パン", "穀物・いも類", { carb: 42, protein: 10, fiber: 4.5 }, { phytate: "medium" }),
  food("udon", "うどん", "穀物・いも類", { carb: 56, protein: 6.1, sodium: 120 }),
  food("soba", "そば", "穀物・いも類", { carb: 54, protein: 9.0, fiber: 2.0, vitamin_b1: 0.19, magnesium: 27 }),
  food("pasta", "パスタ", "穀物・いも類", { carb: 71, protein: 12 }),
  food("jagaimo", "じゃがいも", "穀物・いも類", { vitamin_c: 35, potassium: 410, carb: 17, fiber: 1.3 }),
  food("satsumaimo", "さつまいも", "穀物・いも類", { vitamin_c: 29, potassium: 480, fiber: 2.3, carb: 31 }),
  food("satoimo", "里芋", "穀物・いも類", { potassium: 640, fiber: 2.3 }),
  food("nagaimo", "長芋", "穀物・いも類", { potassium: 430, vitamin_b1: 0.1 }),
  food("oatmeal", "オートミール", "穀物・いも類", { fiber: 9.4, protein: 13.7, magnesium: 100, iron_nonheme: 3.9 }),

  // ===== 豆類・大豆製品 =====
  food("natto", "納豆", "豆類・大豆製品", { protein: 16.5, vitamin_k: 600, iron_nonheme: 3.3, magnesium: 100, folate: 120 }, { isoflavone: "medium" }),
  food("toufu", "豆腐", "豆類・大豆製品", { protein: 6.6, calcium: 86, iron_nonheme: 0.9, magnesium: 57 }, { phytate: "medium", isoflavone: "medium" }),
  food("daizu", "大豆", "豆類・大豆製品", { protein: 33, iron_nonheme: 6.8, fiber: 17, folate: 230 }, { phytate: "high", isoflavone: "high" }),
  food("edamame", "枝豆", "豆類・大豆製品", { protein: 11.7, folate: 320, vitamin_c: 27, fiber: 5.0 }, { isoflavone: "medium" }),
  food("miso", "味噌", "豆類・大豆製品", { protein: 12.5, sodium: 4900 }, { lactic_acid_bacteria: "medium", isoflavone: "medium" }),
  food("aburaage", "油揚げ", "豆類・大豆製品", { protein: 18, calcium: 310, fat: 34 }),
  food("tounyuu", "豆乳", "豆類・大豆製品", { protein: 3.6, calcium: 31 }, { isoflavone: "medium" }),
  food("azuki", "あずき", "豆類・大豆製品", { protein: 20, fiber: 17, iron_nonheme: 5.5 }, { phytate: "high" }),
  food("hiyokomame", "ひよこ豆", "豆類・大豆製品", { protein: 20, fiber: 16.3, folate: 350, magnesium: 140 }, { phytate: "high" }),
  food("lentil", "レンズ豆", "豆類・大豆製品", { protein: 23, fiber: 16.7, iron_nonheme: 9.0, folate: 77 }, { phytate: "high" }),

  // ===== 肉類 =====
  food("torimune", "鶏むね肉", "肉類", { protein: 23, vitamin_b6: 0.6 }),
  food("torimomo", "鶏もも肉", "肉類", { protein: 17, fat: 14, zinc: 1.6 }),
  food("torilever", "鶏レバー", "肉類", { iron_nonheme: 9.0, vitamin_a: 14000, folate: 1300, vitamin_b12: 44, zinc: 3.3 }),
  food("butaroosu", "豚ロース肉", "肉類", { protein: 19, vitamin_b1: 0.69, zinc: 1.6, iron_heme: 0.6 }),
  food("butalever", "豚レバー", "肉類", { iron_heme: 13.0, vitamin_a: 13000, vitamin_b12: 25, folate: 810, zinc: 6.9, copper: 0.99 }),
  food("gyuuakami", "牛赤身肉", "肉類", { protein: 21, iron_heme: 2.5, zinc: 4.0, vitamin_b12: 1.7 }),
  food("gyuulever", "牛レバー", "肉類", { iron_heme: 4.0, vitamin_a: 1100, vitamin_b12: 53, folate: 1000, copper: 5.3 }),
  food("lamb", "ラム肉", "肉類", { protein: 20, iron_heme: 2.2, zinc: 2.6, vitamin_b12: 2.5 }),
  food("bacon", "ベーコン", "肉類", { protein: 12.9, sodium: 800, fat: 39 }),
  food("sausage", "ソーセージ", "肉類", { protein: 13, sodium: 740, fat: 29 }),
  food("namahamu", "生ハム", "肉類", { protein: 25, sodium: 1400 }, { tyramine: "medium" }),
  food("salami", "サラミ", "肉類", { protein: 25, sodium: 1600, fat: 40 }, { tyramine: "high" }),

  // ===== 魚介類 =====
  food("sake", "鮭", "魚介類", { protein: 22, vitamin_d: 32, vitamin_b12: 5.9, potassium: 360, iron_heme: 0.5 }),
  food("maguro", "まぐろ(赤身)", "魚介類", { protein: 26, iron_heme: 1.1, vitamin_d: 5, vitamin_b12: 1.3 }),
  food("katsuo", "かつお", "魚介類", { protein: 25, iron_heme: 1.9, vitamin_b12: 8.4, vitamin_d: 4 }),
  food("saba", "さば", "魚介類", { protein: 20, fat: 16.8, vitamin_d: 5.1, vitamin_b12: 13 }),
  food("iwashi", "いわし", "魚介類", { protein: 19, calcium: 74, vitamin_d: 32, iron_heme: 2.1 }),
  food("sanma", "さんま", "魚介類", { protein: 18, fat: 24.6, vitamin_d: 16, vitamin_b12: 16 }),
  food("buri", "ぶり", "魚介類", { protein: 21, fat: 17, vitamin_d: 8, vitamin_b12: 3.8 }),
  food("tara", "たら", "魚介類", { protein: 18, vitamin_d: 1, iron_heme: 0.2 }),
  food("ebi", "えび", "魚介類", { protein: 21, zinc: 1.4, copper: 0.4 }),
  food("kani", "かに", "魚介類", { protein: 20, zinc: 2.6, copper: 0.6 }),
  food("ika", "いか", "魚介類", { protein: 18, zinc: 1.5 }),
  food("tako", "たこ", "魚介類", { protein: 16, zinc: 1.6, iron_heme: 0.6 }),
  food("asari", "あさり", "魚介類", { iron_heme: 3.8, vitamin_b12: 52, calcium: 66 }),
  food("shijimi", "しじみ", "魚介類", { iron_heme: 8.3, vitamin_b12: 68, calcium: 240 }),
  food("kaki_oyster", "牡蠣", "魚介類", { zinc: 14, iron_heme: 2.1, vitamin_b12: 23, copper: 1.0 }),

  // ===== 卵・乳製品 =====
  food("tamago", "卵", "卵・乳製品", { protein: 12.3, vitamin_a: 150, vitamin_d: 3.8, vitamin_b12: 0.9, iron_nonheme: 1.5 }),
  food("gyuunyuu", "牛乳", "卵・乳製品", { calcium: 110, vitamin_b2: 0.15, protein: 3.3, vitamin_d: 0.3 }),
  food("yogurt", "ヨーグルト", "卵・乳製品", { calcium: 120, protein: 3.6 }, { lactic_acid_bacteria: "high" }),
  food("cheese_process", "チーズ(プロセス)", "卵・乳製品", { calcium: 630, protein: 22, sodium: 1100 }),
  food("cheese_aged", "チーズ(熟成/パルメザン等)", "卵・乳製品", { calcium: 1300, protein: 44 }, { tyramine: "high" }),
  food("butter", "バター", "卵・乳製品", { fat: 81, vitamin_a: 520 }),
  food("namacream", "生クリーム", "卵・乳製品", { fat: 45, vitamin_a: 160 }),
  food("cottage_cheese", "カッテージチーズ", "卵・乳製品", { protein: 13.3, calcium: 55 }),

  // ===== きのこ類 =====
  food("shiitake", "しいたけ", "きのこ類", { vitamin_d: 0.3, fiber: 4.9, potassium: 290 }),
  food("shimeji", "しめじ", "きのこ類", { fiber: 3.5, vitamin_d: 0.5, potassium: 370 }),
  food("maitake", "まいたけ", "きのこ類", { vitamin_d: 4.9, fiber: 3.5, potassium: 230 }),
  food("enoki", "えのき", "きのこ類", { vitamin_d: 0.9, fiber: 3.9, folate: 75 }),
  food("eringi", "エリンギ", "きのこ類", { fiber: 3.4, potassium: 340 }),
  food("kikurage", "きくらげ", "きのこ類", { vitamin_d: 85, iron_nonheme: 5.2, calcium: 310 }),

  // ===== 海藻類 =====
  food("wakame", "わかめ", "海藻類", { calcium: 100, magnesium: 110, vitamin_k: 140, fiber: 3.6 }),
  food("kombu", "昆布", "海藻類", { calcium: 710, magnesium: 530, fiber: 27 }),
  food("hijiki", "ひじき", "海藻類", { calcium: 1000, iron_nonheme: 6.2, magnesium: 640 }),
  food("nori", "のり", "海藻類", { vitamin_a: 2300, vitamin_c: 160, iron_nonheme: 11, folate: 1900 }),
  food("mozuku", "もずく", "海藻類", { fiber: 1.4, calcium: 22 }),

  // ===== 種実類 =====
  food("almond", "アーモンド", "種実類", { vitamin_e: 30, magnesium: 270, fiber: 10.1, protein: 19.6, calcium: 250 }),
  food("walnut", "くるみ", "種実類", { fat: 68, vitamin_e: 1.2, magnesium: 150, fiber: 7.5 }),
  food("cashew", "カシューナッツ", "種実類", { magnesium: 240, zinc: 5.4, iron_nonheme: 4.8, copper: 1.9 }),
  food("sesame", "ごま", "種実類", { calcium: 1200, iron_nonheme: 9.6, magnesium: 370, fiber: 10.8 }, { phytate: "medium" }),
  food("peanut", "ピーナッツ", "種実類", { protein: 25.4, magnesium: 170, vitamin_e: 10.1, fiber: 7.4 }),
  food("pistachio", "ピスタチオ", "種実類", { potassium: 970, magnesium: 120, vitamin_b6: 1.22, fiber: 9.2 }),

  // ===== 調味料・香辛料・ハーブ =====
  food("kurokoshou", "黒コショウ", "調味料・香辛料", {}, { piperine: "high" }),
  food("ukon", "ウコン(ターメリック)", "調味料・香辛料", {}, { curcumin: "high" }),
  food("tougarashi", "唐辛子", "調味料・香辛料", { vitamin_c: 120, beta_carotene: 6600 }),
  food("cinnamon", "シナモン", "調味料・香辛料", { calcium: 1200, magnesium: 60 }),
  food("basil", "バジル", "調味料・香辛料", { beta_carotene: 6300, vitamin_k: 820, calcium: 240 }),
  food("parsley", "パセリ", "調味料・香辛料", { vitamin_c: 120, beta_carotene: 7400, vitamin_k: 850, folate: 220 }),
  food("olive_oil", "オリーブオイル", "調味料・香辛料", { fat: 100, vitamin_e: 7.4 }),
  food("sesame_oil", "ごま油", "調味料・香辛料", { fat: 100, vitamin_e: 1.5 }),
  food("vinegar", "酢", "調味料・香辛料", {}),
  food("mirin", "みりん", "調味料・香辛料", { carb: 43 }),
  food("sugar", "砂糖", "調味料・香辛料", { carb: 100 }),
  food("salt", "塩", "調味料・香辛料", { sodium: 39000 }),
  food("mayonnaise", "マヨネーズ", "調味料・香辛料", { fat: 76, vitamin_e: 14 }),
  food("ketchup", "ケチャップ", "調味料・香辛料", { sodium: 1100, vitamin_c: 8 }, { lycopene: "medium" }),
  food("shouyu", "醤油", "調味料・香辛料", { sodium: 5700, protein: 7.7 }),

  // ===== 飲料 =====
  food("ryokucha", "緑茶", "飲料", { vitamin_c: 6, potassium: 27 }, { tannin: "high", catechin: "high", caffeine: "medium" }),
  food("koucha", "紅茶", "飲料", {}, { tannin: "high", caffeine: "medium" }),
  food("coffee", "コーヒー", "飲料", {}, { caffeine: "high" }),
  food("oolongcha", "烏龍茶", "飲料", {}, { tannin: "medium", caffeine: "low" }),
  food("akawine", "赤ワイン", "飲料", { alcohol: 11 }, { anthocyanin: "medium", tyramine: "low" }),
  food("shirowine", "白ワイン", "飲料", { alcohol: 11 }),
  food("beer", "ビール", "飲料", { alcohol: 4.5 }),
  food("nihonshu", "日本酒", "飲料", { alcohol: 15 }),
  food("aojiru", "青汁", "飲料", { beta_carotene: 3500, vitamin_c: 60, potassium: 700, calcium: 200, vitamin_k: 400 }),
  food("cocoa", "ココア", "飲料", { magnesium: 440, iron_nonheme: 14, fiber: 23.9 }, { tannin: "low" }),

  // ===== サプリメント =====
  food("protein_powder", "プロテインパウダー(ホエイ)", "サプリメント", { protein: 80, vitamin_b6: 1 }),
  food("multivitamin", "マルチビタミン", "サプリメント", { vitamin_c: 100, vitamin_d: 10, vitamin_e: 10, vitamin_b6: 5, vitamin_b12: 5, folate: 200, zinc: 10, calcium: 100, iron_nonheme: 5 }),
  food("vitaminc_supp", "ビタミンCサプリ", "サプリメント", { vitamin_c: 1000 }),
  food("iron_supp", "鉄サプリ", "サプリメント", { iron_nonheme: 50 }),
  food("calcium_supp", "カルシウムサプリ", "サプリメント", { calcium: 500 }),
  food("zinc_supp", "亜鉛サプリ", "サプリメント", { zinc: 15 }),
  food("magnesium_supp", "マグネシウムサプリ", "サプリメント", { magnesium: 300 }),
  food("vitamind_supp", "ビタミンDサプリ", "サプリメント", { vitamin_d: 25 }),
  food("omega3", "オメガ3(フィッシュオイル)", "サプリメント", { fat: 10, vitamin_d: 5 }),
  food("creatine", "クレアチン", "サプリメント", {}),
  food("bcaa", "BCAA", "サプリメント", { protein: 5 }),
  food("probiotic_supp", "乳酸菌サプリ", "サプリメント", {}, { lactic_acid_bacteria: "high" }),
  food("fiber_supp", "食物繊維サプリ", "サプリメント", { fiber: 5 }),
  food("ukon_supp", "ウコンサプリ", "サプリメント", {}, { curcumin: "high" }),
  food("curcumin_piperine_supp", "クルクミン・ピペリン配合サプリ", "サプリメント", {}, { curcumin: "high", piperine: "high" }),

  // ===== 医薬品(飲み合わせ警告チェック用) =====
  food("warfarin_drug", "ワーファリン(抗凝固薬)", "医薬品", {}, { warfarin: "high" }),
  food("maoi_drug_item", "MAO阻害薬", "医薬品", {}, { maoi_drug: "high" }),
  food("cyp3a4_drug_item", "降圧剤・スタチン(CYP3A4で代謝される薬)", "医薬品", {}, { cyp3a4_substrate_drug: "high" }),
  food("antibiotic_drug_item", "抗菌薬(テトラサイクリン系・ニューキノロン系)", "医薬品", {}, { tetracycline_quinolone_drug: "high" }),
];

export function getAllFoodCategories(): string[] {
  return Array.from(new Set(foods.map((f) => f.category)));
}

export function getFoodById(id: string): FoodItem | undefined {
  return foods.find((f) => f.id === id);
}
