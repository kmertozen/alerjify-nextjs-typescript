import { GetTagsForSitemapQuery } from "@/generated/graphql";
import client from "@/service/sitemap/apolloClient";
import { GetTagsForSitemapDocument } from "@/service/sitemap/getTagsForSitemap.generated";
import { gql } from "@apollo/client";
import dayjs from "dayjs";
import { GetServerSideProps } from "next";

const getTags = async () => {
  const { data } = await client.query<GetTagsForSitemapQuery>({
    query: gql`
      ${GetTagsForSitemapDocument}
    `,
  });
  return data.tags?.data.map((tag) => tag.attributes);
};
const generateSiteMap = async () => {
  const tags = await getTags();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${tags
       ?.map((tag) => {
         return `
      <url>
          <loc>${baseUrl}/etiket/${tag?.slug}/</loc>
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
