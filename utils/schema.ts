import { Maybe, Recipe } from "@/generated/graphql";

export const getRecipeSchema = (recipe?: Maybe<Recipe>) => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Recipe",
    author: "Mert",
    cookTime: "PT1H",
    datePublished: recipe?.createdAt ?? "",
    description: recipe?.recipeDescription,
    image: recipe?.recipeImages?.data?.attributes?.url,
    recipeCategory: recipe?.categories?.data?.[0]?.attributes?.categoryTitle,
    recipeIngredient: recipe?.ingredients?.map(
      (ingredient) =>
        `${ingredient?.amount ?? ""} ${
          ingredient?.ingredient?.data?.attributes?.ingredient_name
        }`
    ),
    name: recipe?.recipeTitle,
    recipeInstructions: recipe?.recipeDirections?.direction?.map(
      (direction) => ({
        "@type": "HowToStep",
        text: direction?.text,
        ...(direction?.image?.data && {
          image: direction?.image?.data?.attributes?.url,
        }),
      })
    ),
    keywords: recipe?.tags?.data
      ?.map((tag) => tag.attributes?.tag_name)
      .join(", "),
  });
};
