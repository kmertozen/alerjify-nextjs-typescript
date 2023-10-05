import { GetTagsForSitemapQuery } from "@/generated/graphql";
import client from "@/service/sitemap/apolloClient";
import { GetTagsForSitemapDocument } from "@/service/sitemap/getTagsForSitemap.generated";
import { gql } from "@apollo/client";
import dayjs from "dayjs";
import { GetServerSideProps } from "next";

const generateSiteMap = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
          <loc>${baseUrl}/sitemap/sitemap.recipes.xml</loc>
          <lastmod>${dayjs().format("YYYY-MM-DDTHH:mm:ssZ")}</lastmod>
      </sitemap>
      <sitemap>
          <loc>${baseUrl}/sitemap/sitemap.categories.xml</loc>
          <lastmod>${dayjs().format("YYYY-MM-DDTHH:mm:ssZ")}</lastmod>
      </sitemap>
      <sitemap>
          <loc>${baseUrl}/sitemap/sitemap.tags.xml</loc>
          <lastmod>${dayjs().format("YYYY-MM-DDTHH:mm:ssZ")}</lastmod>
      </sitemap>
     </sitemapindex>
   `;
};

const SitemapTags = () => {};

export default SitemapTags;

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
