import { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());
const config: CodegenConfig = {
  schema: process.env.NEXT_GRAPHQL_ENDPOINT,
  documents: ["service/internal/**/*.graphql"],
  generates: {
    "generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
    src: {
      preset: "near-operation-file",
      presetConfig: {
        baseTypesPath: "../generated/graphql.ts",
      },
      plugins: ["typescript", "typescript-operations", "typescript-rtk-query"],
    },
  },
};

export default config;
