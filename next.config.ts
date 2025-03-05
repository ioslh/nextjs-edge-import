import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  webpack(config) {
    console.log("Target:", config.target);
    console.log("ConditionNames:", config.resolve.conditionNames);
    return config;
  },
};

const withMDX = createMDX({});
export default withBundleAnalyzer(withMDX(nextConfig));
