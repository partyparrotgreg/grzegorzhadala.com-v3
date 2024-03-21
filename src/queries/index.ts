import gql from "graphql-tag";

export const PROJECTS_QUERY = gql`
  {
    projects: allProjects {
      id
      projectName
      _status
      _firstPublishedAt
    }

    meta: _allProjectsMeta {
      count
    }
  }
`;
