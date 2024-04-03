import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
  query AboutPageQuery {
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
    experiences: allExperiences(orderBy: end_DESC) {
      role
      start
      client {
        company
      }
    }
  }
`);
