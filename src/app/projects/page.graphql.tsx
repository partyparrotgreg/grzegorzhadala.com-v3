import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
  fragment DatoImage_ResponsiveImageFragment on ResponsiveImage {
    src
    srcSet
    base64
    width
    height
    alt
    title
  }

  query Projects {
    projects: allProjects {
      id
      projectName
      _status
      _firstPublishedAt
      client {
        company
      }
      summary
      slug
      cover {
        responsiveImage {
          ...DatoImage_ResponsiveImageFragment
        }
      }
    }

    meta: _allProjectsMeta {
      count
    }
  }
`);
