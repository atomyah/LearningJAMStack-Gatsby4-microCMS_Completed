require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `ヤー・スペーステクノロジー`,
    description: `宇宙開発技術で世界をひとつに。ユニバーサルスタッフ（地球人、金星人、プレアデス人、クラリオン星人）で取り組みます。`,
    author: `@yah-space.work`,
    siteUrl: `https://yah-space.work/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // 「4.1.2 gatsby-config.jsの編集」で追加するmicroCMS用の設定
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.MICROCMS_APIKEY,
        serviceId: 'yah-space-work',
        apis: [{
          endpoint: 'information',
        }],
      },
    }
    // microCMS用の設定 ここまで    
  ],
}
