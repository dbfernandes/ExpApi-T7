import { type Product } from "../../generated/prisma/client.js";
import { prisma } from "../../utils/prismaClient.js";
import type { CreateProductDto } from "./product.types.js";

export function getProducts(): Promise<Product[]> {
  return prisma.product.findMany();
}

export async function createProduct(data: CreateProductDto): Promise<Product> {
  return prisma.product.create({ data });
}

export async function getProduct(id: string): Promise<Product | null> {
  return prisma.product.findFirst({ where: { id } });
}
