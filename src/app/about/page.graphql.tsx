import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
  query AboutPageQuery {
    about {
      introduction
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
    experiences: allExperiences(orderBy: start_DESC) {
      role
      start
      client {
        company
      }
    }
  }
`);
