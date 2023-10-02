import { GetRecipesForSitemapQuery } from "@/generated/graphql";
import client from "@/service/sitemap/apolloClient";
import { GetRecipesForSitemapDocument } from "@/service/sitemap/getRecipesForSitemap.generated";
import { gql } from "@apollo/client";
import dayjs from "dayjs";
import { GetServerSideProps } from "next";

const getRecipes = async () => {
  const { data } = await client.query<GetRecipesForSitemapQuery>({
    query: gql`
      ${GetRecipesForSitemapDocument}
    `,
  });
  return data.recipes?.data.map((recipe) => recipe.attributes);
};
const generateSiteMap = async () => {
  const recipes = await getRecipes();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${recipes
       ?.map((recipe) => {
         return `
      <url>
          <loc>${baseUrl}/${recipe?.slug}</loc>
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

const SitemapRecipes = () => {};

export default SitemapRecipes;

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
