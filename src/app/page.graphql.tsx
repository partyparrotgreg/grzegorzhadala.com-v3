import { graphql } from "@/gql";

export default graphql(`
  query HomePageQuery {
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    util {
      noise {
        responsiveImage {
          src
          srcSet
          base64
          width
          height
          alt
          title
          webpSrcSet
        }
      }
      noiseGradient {
        responsiveImage {
          src
          srcSet
          base64
          width
          height
          alt
          title
          webpSrcSet
        }
      }
    }
    miniProjects: allProjects(first: 3, orderBy: _firstPublishedAt_DESC) {
      id
      slug
      cover {
        responsiveImage {
          src
          srcSet
          base64
          width
          height
          alt
          title
          webpSrcSet
          sizes
          aspectRatio
          bgColor
        }
      }
    }
    home {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      body {
        __typename
        ... on SectionBlockRecord {
          id
          subtitle
          sectionTitle
        }
        ... on ClientsBlockRecord {
          id
          clients {
            id
            description
            company
            logo {
              url
              width
              height
            }
          }
        }
        ... on ProjectListBlockRecord {
          id
          projects {
            id
            projectName
            client {
              company
              id
            }
            skills {
              id
              name
            }
            role {
              role
              id
              start
              end
            }
            color {
              hex
              cssRgb
              green
              blue
              red
            }
            summary
            slug
            cover {
              responsiveImage {
                src
                srcSet
                base64
                width
                height
                alt
                title
                webpSrcSet
                sizes
                aspectRatio
                bgColor
              }
            }
          }
        }
      }
      pageIntro
    }
  }
`);
