import { getLatestRecipesData } from "@/service/internal/getLatestRecipes/getLatestRecipes";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { limit, page, pageSize, category, tag } = req.query;
  const data = await getLatestRecipesData(
    +limit!,
    +page!,
    +pageSize!,
    category as string,
    tag as string
  );
  res.status(200).json(data);
}
