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
    "\n  query HomepageQuery {\n    clients: allClients {\n      id\n      description\n      company\n      logo {\n        url\n        width\n        height\n      }\n    }\n    clientsMeta: _allClientsMeta {\n      count\n    }\n  }\n": types.HomepageQueryDocument,
    "\n  query ProjectQuery($slug: String) {\n    project(filter: { slug: { eq: $slug } }) {\n      id\n      projectName\n      body {\n        blocks {\n          ... on FlowBlockRecord {\n            __typename\n            id\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n              }\n            }\n            description\n          }\n          ... on MobileStackRecord {\n            __typename\n            id\n            title\n            description\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n              }\n            }\n          }\n        }\n        links\n        value\n      }\n      cover {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n        }\n      }\n      slug\n      summary\n      role {\n        role\n        start\n        end\n      }\n      skills {\n        name\n        id\n      }\n      client {\n        id\n        website\n        company\n      }\n      color {\n        hex\n        cssRgb\n      }\n    }\n  }\n": types.ProjectQueryDocument,
    "\n  fragment DatoImage_ResponsiveImageFragment on ResponsiveImage {\n    src\n    srcSet\n    base64\n    width\n    height\n    alt\n    title\n  }\n\n  query Projects {\n    projects: allProjects {\n      id\n      projectName\n      _status\n      _firstPublishedAt\n      client {\n        company\n      }\n      summary\n      slug\n      cover {\n        responsiveImage {\n          ...DatoImage_ResponsiveImageFragment\n        }\n      }\n    }\n\n    meta: _allProjectsMeta {\n      count\n    }\n  }\n": types.DatoImage_ResponsiveImageFragmentFragmentDoc,
    "\n  fragment DatoImage_responsiveImage on ResponsiveImage {\n    src\n    srcSet\n    base64\n    width\n    height\n    alt\n    title\n  }\n": types.DatoImage_ResponsiveImageFragmentDoc,
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
export function graphql(source: "\n  query HomepageQuery {\n    clients: allClients {\n      id\n      description\n      company\n      logo {\n        url\n        width\n        height\n      }\n    }\n    clientsMeta: _allClientsMeta {\n      count\n    }\n  }\n"): (typeof documents)["\n  query HomepageQuery {\n    clients: allClients {\n      id\n      description\n      company\n      logo {\n        url\n        width\n        height\n      }\n    }\n    clientsMeta: _allClientsMeta {\n      count\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ProjectQuery($slug: String) {\n    project(filter: { slug: { eq: $slug } }) {\n      id\n      projectName\n      body {\n        blocks {\n          ... on FlowBlockRecord {\n            __typename\n            id\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n              }\n            }\n            description\n          }\n          ... on MobileStackRecord {\n            __typename\n            id\n            title\n            description\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n              }\n            }\n          }\n        }\n        links\n        value\n      }\n      cover {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n        }\n      }\n      slug\n      summary\n      role {\n        role\n        start\n        end\n      }\n      skills {\n        name\n        id\n      }\n      client {\n        id\n        website\n        company\n      }\n      color {\n        hex\n        cssRgb\n      }\n    }\n  }\n"): (typeof documents)["\n  query ProjectQuery($slug: String) {\n    project(filter: { slug: { eq: $slug } }) {\n      id\n      projectName\n      body {\n        blocks {\n          ... on FlowBlockRecord {\n            __typename\n            id\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n              }\n            }\n            description\n          }\n          ... on MobileStackRecord {\n            __typename\n            id\n            title\n            description\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n              }\n            }\n          }\n        }\n        links\n        value\n      }\n      cover {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n        }\n      }\n      slug\n      summary\n      role {\n        role\n        start\n        end\n      }\n      skills {\n        name\n        id\n      }\n      client {\n        id\n        website\n        company\n      }\n      color {\n        hex\n        cssRgb\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DatoImage_ResponsiveImageFragment on ResponsiveImage {\n    src\n    srcSet\n    base64\n    width\n    height\n    alt\n    title\n  }\n\n  query Projects {\n    projects: allProjects {\n      id\n      projectName\n      _status\n      _firstPublishedAt\n      client {\n        company\n      }\n      summary\n      slug\n      cover {\n        responsiveImage {\n          ...DatoImage_ResponsiveImageFragment\n        }\n      }\n    }\n\n    meta: _allProjectsMeta {\n      count\n    }\n  }\n"): (typeof documents)["\n  fragment DatoImage_ResponsiveImageFragment on ResponsiveImage {\n    src\n    srcSet\n    base64\n    width\n    height\n    alt\n    title\n  }\n\n  query Projects {\n    projects: allProjects {\n      id\n      projectName\n      _status\n      _firstPublishedAt\n      client {\n        company\n      }\n      summary\n      slug\n      cover {\n        responsiveImage {\n          ...DatoImage_ResponsiveImageFragment\n        }\n      }\n    }\n\n    meta: _allProjectsMeta {\n      count\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DatoImage_responsiveImage on ResponsiveImage {\n    src\n    srcSet\n    base64\n    width\n    height\n    alt\n    title\n  }\n"): (typeof documents)["\n  fragment DatoImage_responsiveImage on ResponsiveImage {\n    src\n    srcSet\n    base64\n    width\n    height\n    alt\n    title\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;