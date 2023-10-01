export const getRecipeDetailUrl = (slug: string) => {
  return `/tarif/${slug}/`;
};

export const getCategoryUrl = (slug?: string) => {
  return `/kategori/${slug}/`;
};

export const getTagUrl = (slug?: string) => {
  return `/etiket/${slug}/`;
};
