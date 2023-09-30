export const prepareImageUrl = (url?: string) => {
  return url?.startsWith("http")
    ? url
    : `${process.env.NEXT_PUBLIC_ASSETS_URL}${url}`;
};
