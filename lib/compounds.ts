export type CompoundCategory =
  | "macro"
  | "vitamin"
  | "mineral"
  | "phytochemical"
  | "medication";

export interface Compound {
  id: string;
  name: string;
  category: CompoundCategory;
}

export const compounds: Compound[] = [
  // --- マクロ栄養素 ---
  { id: "protein", name: "タンパク質", category: "macro" },
  { id: "fat", name: "脂質", category: "macro" },
  { id: "carb", name: "炭水化物", category: "macro" },
  { id: "fiber", name: "食物繊維", category: "macro" },
  { id: "oligosaccharide", name: "オリゴ糖", category: "macro" },

  // --- ビタミン ---
  { id: "vitamin_a", name: "ビタミンA", category: "vitamin" },
  { id: "beta_carotene", name: "βカロテン", category: "vitamin" },
  { id: "vitamin_b1", name: "ビタミンB1", category: "vitamin" },
  { id: "vitamin_b2", name: "ビタミンB2", category: "vitamin" },
  { id: "vitamin_b6", name: "ビタミンB6", category: "vitamin" },
  { id: "vitamin_b12", name: "ビタミンB12", category: "vitamin" },
  { id: "folate", name: "葉酸", category: "vitamin" },
  { id: "vitamin_c", name: "ビタミンC", category: "vitamin" },
  { id: "vitamin_d", name: "ビタミンD", category: "vitamin" },
  { id: "vitamin_e", name: "ビタミンE", category: "vitamin" },
  { id: "vitamin_k", name: "ビタミンK", category: "vitamin" },

  // --- ミネラル ---
  { id: "calcium", name: "カルシウム", category: "mineral" },
  { id: "iron_heme", name: "ヘム鉄", category: "mineral" },
  { id: "iron_nonheme", name: "非ヘム鉄", category: "mineral" },
  { id: "zinc", name: "亜鉛", category: "mineral" },
  { id: "magnesium", name: "マグネシウム", category: "mineral" },
  { id: "potassium", name: "カリウム", category: "mineral" },
  { id: "sodium", name: "ナトリウム", category: "mineral" },
  { id: "copper", name: "銅", category: "mineral" },

  // --- 機能性成分・抗栄養素 ---
  { id: "tannin", name: "タンニン", category: "phytochemical" },
  { id: "phytate", name: "フィチン酸", category: "phytochemical" },
  { id: "oxalate", name: "シュウ酸", category: "phytochemical" },
  { id: "caffeine", name: "カフェイン", category: "phytochemical" },
  { id: "curcumin", name: "クルクミン", category: "phytochemical" },
  { id: "piperine", name: "ピペリン", category: "phytochemical" },
  { id: "catechin", name: "カテキン", category: "phytochemical" },
  { id: "quercetin", name: "ケルセチン", category: "phytochemical" },
  { id: "lycopene", name: "リコピン", category: "phytochemical" },
  { id: "allicin", name: "アリシン", category: "phytochemical" },
  { id: "isoflavone", name: "イソフラボン", category: "phytochemical" },
  { id: "lactic_acid_bacteria", name: "乳酸菌", category: "phytochemical" },
  { id: "anthocyanin", name: "アントシアニン", category: "phytochemical" },
  { id: "alcohol", name: "アルコール", category: "phytochemical" },
  { id: "furanocoumarin", name: "フラノクマリン類", category: "phytochemical" },
  { id: "tyramine", name: "チラミン", category: "phytochemical" },

  // --- 医薬品(飲み合わせ警告用の擬似成分) ---
  { id: "warfarin", name: "ワーファリン(抗凝固薬)", category: "medication" },
  {
    id: "cyp3a4_substrate_drug",
    name: "CYP3A4で代謝される薬(降圧剤・スタチン等)",
    category: "medication",
  },
  { id: "maoi_drug", name: "MAO阻害薬", category: "medication" },
  {
    id: "tetracycline_quinolone_drug",
    name: "テトラサイクリン系・ニューキノロン系抗菌薬",
    category: "medication",
  },
];

export type CompoundId = (typeof compounds)[number]["id"];

const compoundMap = new Map(compounds.map((c) => [c.id, c]));

export function getCompound(id: string): Compound | undefined {
  return compoundMap.get(id);
}
