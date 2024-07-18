import { graphql } from "@/gql";

export default graphql(/* GraphQL */ `
  query LabsQuery {
    allLabs {
      title
      url
      id
      description(markdown: false)
      images {
        id
        responsiveImage {
          src
          srcSet
          base64
          width
          height
          alt
          title
          webpSrcSet
        }
      }
    }
  }
`);
