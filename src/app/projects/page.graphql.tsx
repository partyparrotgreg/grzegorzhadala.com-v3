import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
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

    meta: _allProjectsMeta {
      count
    }
  }
`);
