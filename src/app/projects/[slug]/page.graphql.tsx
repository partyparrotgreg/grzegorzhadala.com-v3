import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
  query ProjectQuery($slug: String) {
    project(filter: { slug: { eq: $slug } }) {
      id
      projectName
      body {
        blocks {
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
      }
      color {
        hex
        cssRgb
      }
    }
  }
`);
