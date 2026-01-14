import watch1 from "../assets/Watch1.png";
import sellingImage1 from "../assets/sellingImage1.webp";

export type CategoryProduct = {
  id: string;
  name: string;
  price: string;
  image: string;
};

export const categories = [
  "Rolex",
  "Seiko",
  "Casio",
  "GShock",
  "Cartier",
  "Omega",
  "Tag Heuer",
  "Tissot",
  "Patek Philippe",
] as const;

export type CategoryName = (typeof categories)[number];

const sampleProducts = (brand: string): CategoryProduct[] => [
  {
    id: `${brand.toLowerCase().replace(/\s+/g, "-")}-1`,
    name: `${brand} Classic`,
    price: "₱ 129,000",
    image: sellingImage1,
  },
  {
    id: `${brand.toLowerCase().replace(/\s+/g, "-")}-2`,
    name: `${brand} Sport`,
    price: "₱ 89,000",
    image: watch1,
  },
  {
    id: `${brand.toLowerCase().replace(/\s+/g, "-")}-3`,
    name: `${brand} Heritage`,
    price: "₱ 179,000",
    image: sellingImage1,
  },
  {
    id: `${brand.toLowerCase().replace(/\s+/g, "-")}-4`,
    name: `${brand} Limited`,
    price: "₱ 249,000",
    image: watch1,
  },
];

export const productsByCategory: Record<string, CategoryProduct[]> = Object.fromEntries(
  categories.map((name) => [name.toLowerCase(), sampleProducts(name)])
);
