import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
  query TestPageQuery {
    projects: allProjects {
      id
      projectName
      _status
      _firstPublishedAt
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
        description
      }
      summary
      slug
      cover {
        responsiveImage {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
    }

    meta: _allProjectsMeta {
      count
    }
    clients: allClients {
      id
      description
      company
      logo {
        url
        width
        height
      }
    }
    experiences: allExperiences {
      role
      start
      client {
        company
      }
    }
    clientsMeta: _allClientsMeta {
      count
    }
  }
`);