require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `HolyMoly Tutorial`,
    description: `HolyMoly의 SSG tutorial입니다.`,
    author: `holymoly.jun`,
    siteUrl: 'https://holymoly-ssg.vercel.app',
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.STRAPI_API_URL || 'http://localhost:1337',
        accessToken: process.env.STRAPI_TOKEN,
        singleTypes: [
          {
            singularName: 'global',
            queryParams: {
              populate: {
                favicon: '*',
                defaultSeo: {
                  populate: '*',
                },
              },
            },
          },
        ],
      },
    },

    `gatsby-plugin-react-helmet`,

    //*** [SEO] robots.txt 파일 생성을 위한 플러그인
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: ['/info'] }],
      },
    },

    //*** [SEO] sitemap 생성을 위한 플러그인
    'gatsby-plugin-sitemap',

    //*** [SEO] 중복페이지 제거를 위한 canonical-url 설정을 위한 플러그인
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://holymoly-ssg.vercel.app',
        stripQueryString: true,
      },
    },

    //*** typescript를 위한 플러그인
    {
      resolve: 'gatsby-plugin-typescript',

      options: {
        isTSX: true,
        allExtensions: true,
      },
    },

    //*** EmotionJS를 위한 플러그인
    `gatsby-plugin-emotion`,

    //*** image lazy loading을 위한 플러그인들
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },

    //*** markdown contents들 위치 정의
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },

    //*** markdown을 위한 플러그인들
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
  ],
}
