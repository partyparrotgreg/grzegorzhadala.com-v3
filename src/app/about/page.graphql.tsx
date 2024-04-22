import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
  query HomeQuery {
    home {
      body {
        __typename
        ... on ClientsBlockRecord {
          clients {
            ...ClientBlockFragment
          }
        }
        ... on ProjectListBlockRecord {
          id
          projects {
            ...ProjectFragment
          }
        }
        ... on ExperienceListBlockRecord {
          id
          experiences {
            id
          }
        }
      }
      _seoMetaTags(locale: en) {
        content
        attributes
        tag
      }
    }
  }
  fragment AboutImage on ResponsiveImage {
    src
    srcSet
    base64
    width
    height
    alt
    title
    webpSrcSet
    sizes
    aspectRatio
    bgColor
  }

  fragment ClientBlockFragment on ClientRecord {
    id
    website
    logo {
      url
      width
      height
    }
    company
    description
  }

  fragment ProjectFragment on ProjectRecord {
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
        ...AboutImage
      }
    }
  }
`);
