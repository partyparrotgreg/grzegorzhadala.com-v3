import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
  query Projects {
    projects: allProjects {
      id
      projectName
      slug
      _status
      _firstPublishedAt
    }

    meta: _allProjectsMeta {
      count
    }
  }
`);
