/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query AboutPageQuery {\n    clients: allClients {\n      id\n      description\n      company\n      logo {\n        url\n        width\n        height\n      }\n    }\n    experiences: allExperiences(orderBy: end_DESC) {\n      role\n      start\n      client {\n        company\n      }\n    }\n  }\n": types.AboutPageQueryDocument,
    "\n  query HomePageQuery {\n    projects: allProjects {\n      id\n      projectName\n      _status\n      _firstPublishedAt\n      client {\n        company\n        id\n      }\n      skills {\n        id\n        name\n      }\n      role {\n        role\n        id\n        start\n        end\n        description\n      }\n      summary\n      slug\n      cover {\n        responsiveImage {\n          srcSet\n          webpSrcSet\n          sizes\n          src\n          width\n          height\n          aspectRatio\n          alt\n          title\n          base64\n        }\n      }\n    }\n\n    meta: _allProjectsMeta {\n      count\n    }\n    clients: allClients {\n      id\n      description\n      company\n      logo {\n        url\n        width\n        height\n      }\n    }\n  }\n": types.HomePageQueryDocument,
    "\n  query ProjectQuery($slug: String) {\n    project(filter: { slug: { eq: $slug } }) {\n      id\n      projectName\n      body {\n        blocks {\n          __typename\n          ... on FlowBlockRecord {\n            __typename\n            id\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            description\n          }\n          ... on MobileStackRecord {\n            __typename\n            id\n            title\n            description\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on BeforeAfterBlockRecord {\n            id\n            title\n            description\n            left {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            right {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on FeaturephotoblockRecord {\n            id\n            title\n            description\n            image {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on SectionBlockRecord {\n            id\n            subtitle\n            sectionTitle\n          }\n          ... on SliderShowcaseBlockRecord {\n            id\n            blocks {\n              description\n              id\n              images {\n                responsiveImage {\n                  webpSrcSet\n                  width\n                  title\n                  srcSet\n                  src\n                  height\n                  base64\n                }\n              }\n            }\n          }\n          ... on ProcessListBlockRecord {\n            id\n            blocks {\n              id\n              icon\n              processDescription\n              title\n            }\n          }\n          ... on FeaturephotoblockRecord {\n            id\n            image {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            title\n            description\n          }\n          ... on ProjectOverviewBlockRecord {\n            id\n            projectDescription\n            client {\n              id\n              website\n              company\n              logo {\n                url\n                width\n                height\n              }\n            }\n          }\n        }\n        value\n      }\n      cover {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n        }\n      }\n      slug\n      summary\n      role {\n        role\n        start\n        end\n      }\n      skills {\n        name\n        id\n      }\n      client {\n        id\n        website\n        company\n        logo {\n          url\n          width\n          height\n        }\n      }\n      color {\n        hex\n        cssRgb\n      }\n    }\n  }\n": types.ProjectQueryDocument,
    "\n  fragment DatoImage_responsiveImage on ResponsiveImage {\n    srcSet\n    webpSrcSet\n    sizes\n    src\n    width\n    height\n    aspectRatio\n    alt\n    title\n    base64\n  }\n": types.DatoImage_ResponsiveImageFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AboutPageQuery {\n    clients: allClients {\n      id\n      description\n      company\n      logo {\n        url\n        width\n        height\n      }\n    }\n    experiences: allExperiences(orderBy: end_DESC) {\n      role\n      start\n      client {\n        company\n      }\n    }\n  }\n"): (typeof documents)["\n  query AboutPageQuery {\n    clients: allClients {\n      id\n      description\n      company\n      logo {\n        url\n        width\n        height\n      }\n    }\n    experiences: allExperiences(orderBy: end_DESC) {\n      role\n      start\n      client {\n        company\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HomePageQuery {\n    projects: allProjects {\n      id\n      projectName\n      _status\n      _firstPublishedAt\n      client {\n        company\n        id\n      }\n      skills {\n        id\n        name\n      }\n      role {\n        role\n        id\n        start\n        end\n        description\n      }\n      summary\n      slug\n      cover {\n        responsiveImage {\n          srcSet\n          webpSrcSet\n          sizes\n          src\n          width\n          height\n          aspectRatio\n          alt\n          title\n          base64\n        }\n      }\n    }\n\n    meta: _allProjectsMeta {\n      count\n    }\n    clients: allClients {\n      id\n      description\n      company\n      logo {\n        url\n        width\n        height\n      }\n    }\n  }\n"): (typeof documents)["\n  query HomePageQuery {\n    projects: allProjects {\n      id\n      projectName\n      _status\n      _firstPublishedAt\n      client {\n        company\n        id\n      }\n      skills {\n        id\n        name\n      }\n      role {\n        role\n        id\n        start\n        end\n        description\n      }\n      summary\n      slug\n      cover {\n        responsiveImage {\n          srcSet\n          webpSrcSet\n          sizes\n          src\n          width\n          height\n          aspectRatio\n          alt\n          title\n          base64\n        }\n      }\n    }\n\n    meta: _allProjectsMeta {\n      count\n    }\n    clients: allClients {\n      id\n      description\n      company\n      logo {\n        url\n        width\n        height\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ProjectQuery($slug: String) {\n    project(filter: { slug: { eq: $slug } }) {\n      id\n      projectName\n      body {\n        blocks {\n          __typename\n          ... on FlowBlockRecord {\n            __typename\n            id\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            description\n          }\n          ... on MobileStackRecord {\n            __typename\n            id\n            title\n            description\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on BeforeAfterBlockRecord {\n            id\n            title\n            description\n            left {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            right {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on FeaturephotoblockRecord {\n            id\n            title\n            description\n            image {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on SectionBlockRecord {\n            id\n            subtitle\n            sectionTitle\n          }\n          ... on SliderShowcaseBlockRecord {\n            id\n            blocks {\n              description\n              id\n              images {\n                responsiveImage {\n                  webpSrcSet\n                  width\n                  title\n                  srcSet\n                  src\n                  height\n                  base64\n                }\n              }\n            }\n          }\n          ... on ProcessListBlockRecord {\n            id\n            blocks {\n              id\n              icon\n              processDescription\n              title\n            }\n          }\n          ... on FeaturephotoblockRecord {\n            id\n            image {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            title\n            description\n          }\n          ... on ProjectOverviewBlockRecord {\n            id\n            projectDescription\n            client {\n              id\n              website\n              company\n              logo {\n                url\n                width\n                height\n              }\n            }\n          }\n        }\n        value\n      }\n      cover {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n        }\n      }\n      slug\n      summary\n      role {\n        role\n        start\n        end\n      }\n      skills {\n        name\n        id\n      }\n      client {\n        id\n        website\n        company\n        logo {\n          url\n          width\n          height\n        }\n      }\n      color {\n        hex\n        cssRgb\n      }\n    }\n  }\n"): (typeof documents)["\n  query ProjectQuery($slug: String) {\n    project(filter: { slug: { eq: $slug } }) {\n      id\n      projectName\n      body {\n        blocks {\n          __typename\n          ... on FlowBlockRecord {\n            __typename\n            id\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            description\n          }\n          ... on MobileStackRecord {\n            __typename\n            id\n            title\n            description\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on BeforeAfterBlockRecord {\n            id\n            title\n            description\n            left {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            right {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on FeaturephotoblockRecord {\n            id\n            title\n            description\n            image {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on SectionBlockRecord {\n            id\n            subtitle\n            sectionTitle\n          }\n          ... on SliderShowcaseBlockRecord {\n            id\n            blocks {\n              description\n              id\n              images {\n                responsiveImage {\n                  webpSrcSet\n                  width\n                  title\n                  srcSet\n                  src\n                  height\n                  base64\n                }\n              }\n            }\n          }\n          ... on ProcessListBlockRecord {\n            id\n            blocks {\n              id\n              icon\n              processDescription\n              title\n            }\n          }\n          ... on FeaturephotoblockRecord {\n            id\n            image {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            title\n            description\n          }\n          ... on ProjectOverviewBlockRecord {\n            id\n            projectDescription\n            client {\n              id\n              website\n              company\n              logo {\n                url\n                width\n                height\n              }\n            }\n          }\n        }\n        value\n      }\n      cover {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n        }\n      }\n      slug\n      summary\n      role {\n        role\n        start\n        end\n      }\n      skills {\n        name\n        id\n      }\n      client {\n        id\n        website\n        company\n        logo {\n          url\n          width\n          height\n        }\n      }\n      color {\n        hex\n        cssRgb\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DatoImage_responsiveImage on ResponsiveImage {\n    srcSet\n    webpSrcSet\n    sizes\n    src\n    width\n    height\n    aspectRatio\n    alt\n    title\n    base64\n  }\n"): (typeof documents)["\n  fragment DatoImage_responsiveImage on ResponsiveImage {\n    srcSet\n    webpSrcSet\n    sizes\n    src\n    width\n    height\n    aspectRatio\n    alt\n    title\n    base64\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;