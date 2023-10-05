import { GetCategoriesForSitemapQuery } from "@/generated/graphql";
import client from "@/service/sitemap/apolloClient";
import { GetCategoriesForSitemapDocument } from "@/service/sitemap/getCategoriesForSitemap.generated";
import { gql } from "@apollo/client";
import dayjs from "dayjs";
import { GetServerSideProps } from "next";

const getCategories = async () => {
  const { data } = await client.query<GetCategoriesForSitemapQuery>({
    query: gql`
      ${GetCategoriesForSitemapDocument}
    `,
  });
  return data.categories?.data.map((category) => category.attributes);
};
const generateSiteMap = async () => {
  const categories = await getCategories();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${categories
       ?.map((category) => {
         return `
      <url>
          <loc>${baseUrl}/kategori/${category?.categorySlug}/</loc>
          <lastmod>${dayjs().format("YYYY-MM-DDTHH:mm:ssZ")}</lastmod>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
      </url>
    `;
       })
       .join("")}
       
     </urlset>
   `;
};

const SitemapCategories = () => {};

export default SitemapCategories;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = await generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
