import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
  query ProjectQuery($slug: String) {
    project(filter: { slug: { eq: $slug } }) {
      id
      projectName
      body {
        blocks {
          __typename
          ... on FlowBlockRecord {
            __typename
            id
            images {
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
            description
          }
          ... on MobileStackRecord {
            __typename
            id
            title
            description
            images {
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
          ... on ProcessBlockRecord {
            id
          }
          ... on BeforeAfterBlockRecord {
            id
            title
            description
            left {
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
            right {
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
          ... on FeaturephotoblockRecord {
            id
            title
            description
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
          }
        }
        links
        value
      }
      cover {
        responsiveImage {
          src
          srcSet
          base64
          width
          height
          alt
          title
        }
      }
      slug
      summary
      role {
        role
        start
        end
      }
      skills {
        name
        id
      }
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
      color {
        hex
        cssRgb
      }
    }
  }
`);
