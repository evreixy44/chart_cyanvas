require("dotenv").config({ path: "../.env" })
const nextTranslate = require("next-translate")

/** @type {import('next').NextConfig} */
const nextConfig = nextTranslate({
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader",
    })
    return config
  },
  async rewrites() {
    return [
      {
        source: String.raw`/api/:path((?!next).*)`,
        destination: `${process.env.BACKEND_HOST}/api/:path*`,
      },
      ...["auth/sonolus", "sonolus", "covers", "rails"].map((dir) => ({
        source: String.raw`/${dir}/:path*`,
        destination: `${process.env.BACKEND_HOST}/${dir}/:path*`,
      })),
      {
        source: "/levels/chcy-:name",
        destination: `/charts/:name`,
      },
    ]
  },
  images: {
    domains: [new URL(process.env.BACKEND_HOST).hostname],
  },
  env: {
    NEXT_PUBLIC_BACKEND_HOST: process.env.BACKEND_HOST,
  },
})

console.log("INFO: BACKEND_HOST =", process.env.BACKEND_HOST)

module.exports = nextConfig
