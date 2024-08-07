import createMDX from "@next/mdx"
import { mdxOptions } from "./src/mdxOptions.mjs"

/** @type {import("next").NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  // webpack(webpackConfig) {
  //   return {
  //     ...webpackConfig,
  //     optimization: {
  //       minimize: false,
  //     },
  //   }
  // },
  // compress: false,
}

const withMDX = createMDX({ options: mdxOptions })

export default withMDX(nextConfig)
