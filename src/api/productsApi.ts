import { http } from "./http";
import type { PaginatedResponse, usuario } from "../types/usuario";

export async function getProducts(params: {
  page: number;
  pageSize: number;
  search?: string; // opcional (si tu backend lo soporta)
}) {
  const { page, pageSize, search } = params;

  const res = await http.get<PaginatedResponse<usuario>>("/products/", {
    params: {
      page,
      page_size: pageSize,
      ...(search ? { search } : {}),
    },
  });

  return res.data;
}