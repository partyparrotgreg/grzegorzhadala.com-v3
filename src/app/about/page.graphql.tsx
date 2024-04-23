import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
  query AboutQuery {
    about {
      meta: _seoMetaTags {
        attributes
        content
        tag
      }
      body {
        __typename
        ... on ProjectOverviewBlockRecord {
          id
          projectDescription
          client {
            id
            website
            company
            logo {
              url
              width
              height
            }
          }
        }
        ... on ProcessListBlockRecord {
          id
          blocks {
            id
            icon
            processDescription
            title
            customIcon {
              url
              width
              height
            }
          }
        }
        ... on FeaturephotoblockRecord {
          id
          image {
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
          title
          description
          span
        }
        ... on ExperienceListBlockRecord {
          id
          experiences {
            id
            client {
              company
            }
            role
            start
            end
          }
        }
        ... on SectionBlockRecord {
          id
          subtitle
          sectionTitle
        }
        ... on ClientsBlockRecord {
          id
          clients {
            id
            company
            logo {
              url
              width
              height
            }
          }
        }
      }
      introduction
      seo {
        description
        image {
          url(imgixParams: { crop: top, h: "630", w: "1200" })
        }
        title
        twitterCard
      }
    }
  }
`);
