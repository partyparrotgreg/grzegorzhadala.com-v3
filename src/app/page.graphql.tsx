import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
  query HomePageQuery {
    home {
      pageIntro
    }
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
      color {
        hex
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
  }
`);
