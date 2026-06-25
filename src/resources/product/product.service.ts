import { type Product } from "../../generated/prisma/client.js";
import { prisma } from "../../utils/prismaClient.js";
import type { CreateProductDto } from "./product.types.js";

export function createProduct(data: CreateProductDto): Promise<Product> {
  return prisma.product.create({ data });
}
