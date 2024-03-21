import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
  query HomepageQuery {
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
    clientsMeta: _allClientsMeta {
      count
    }
  }
`);
