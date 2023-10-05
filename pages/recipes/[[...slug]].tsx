import { GetServerSideProps } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const oldPages = [
    {
      oldPath: "/recipes/nohut-salatali-sandvic/",
      newPath: "/tarif/nohut-salatali-sandvic/",
    },
    {
      oldPath: "/recipes/cikolatali-browni/",
      newPath: "/tarif/cikolatali-browni-tarifi/",
    },
  ];
  const isOldPage = oldPages.find((page) => page.oldPath === ctx.resolvedUrl);

  if (isOldPage) {
    return {
      redirect: {
        destination: isOldPage.newPath,
        statusCode: 301,
      },
    };
  }

  return {
    redirect: {
      destination: "/tarifler/",
      statusCode: 301,
    },
  };
};

const Component = () => {
  return <div></div>;
};

export default Component;
