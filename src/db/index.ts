import { Index } from "@upstash/vector";
import * as dotenv from "dotenv";

dotenv.config();

export type ProductT = {
  id: string;
  imageId: string;
  name: string;
  size: "S" | "M" | "L" | "XL";
  color: "white" | "beige" | "blue" | "green" | "purple";
  price: number;
};

export const db = new Index<ProductT>();
