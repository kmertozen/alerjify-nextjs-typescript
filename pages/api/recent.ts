import { getLatestRecipesData } from "@/service/internal/getLatestRecipes/getLatestRecipes";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { limit, page, pageSize } = req.query;
  const data = await getLatestRecipesData(+limit!, +page!, +pageSize!);
  res.status(200).json(data);
}
