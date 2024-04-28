import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
  query HomePageQuery {
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    home {
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
      seo {
        description
        noIndex
        title
        twitterCard
      }
    }
  }
`);
