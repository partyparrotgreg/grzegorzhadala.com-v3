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
    "\n  query LabsQuery {\n    allLabs {\n      title\n      url\n      id\n      description(markdown: false)\n      images {\n        id\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n          webpSrcSet\n        }\n      }\n    }\n  }\n": types.LabsQueryDocument,
    "\n  query AboutQuery {\n    about {\n      seo: _seoMetaTags {\n        attributes\n        content\n        tag\n      }\n      body {\n        __typename\n        ... on ProjectOverviewBlockRecord {\n          id\n          projectDescription\n          client {\n            id\n            website\n            company\n            logo {\n              url\n              width\n              height\n            }\n          }\n        }\n        ... on ProcessListBlockRecord {\n          id\n          blocks {\n            id\n            icon\n            processDescription\n            title\n            customIcon {\n              url\n              width\n              height\n            }\n          }\n        }\n        ... on FeaturephotoblockRecord {\n          id\n          image {\n            responsiveImage {\n              src\n              srcSet\n              base64\n              width\n              height\n              alt\n              title\n              webpSrcSet\n            }\n          }\n          title\n          description\n          span\n        }\n        ... on ExperienceListBlockRecord {\n          id\n          experiences {\n            id\n            client {\n              company\n            }\n            role\n            start\n            end\n          }\n        }\n        ... on SectionBlockRecord {\n          id\n          subtitle\n          sectionTitle\n        }\n        ... on ClientsBlockRecord {\n          id\n          clients {\n            id\n            company\n            logo {\n              url\n              width\n              height\n            }\n          }\n        }\n      }\n      intro\n    }\n    site: _site {\n      favicon: faviconMetaTags {\n        attributes\n        content\n        tag\n      }\n    }\n  }\n": types.AboutQueryDocument,
    "\n  query HomePageQuery {\n    site: _site {\n      favicon: faviconMetaTags {\n        attributes\n        content\n        tag\n      }\n    }\n    util {\n      noise {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n          webpSrcSet\n        }\n      }\n      noiseGradient {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n          webpSrcSet\n        }\n      }\n    }\n    miniProjects: allProjects {\n      id\n      slug\n      projectName\n      client {\n        company\n      }\n      cover {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n          webpSrcSet\n          sizes\n          aspectRatio\n          bgColor\n        }\n      }\n    }\n    home {\n      seo: _seoMetaTags {\n        attributes\n        content\n        tag\n      }\n      body {\n        __typename\n        ... on SectionBlockRecord {\n          id\n          subtitle\n          sectionTitle\n        }\n        ... on ClientsBlockRecord {\n          id\n          clients {\n            id\n            description\n            company\n            logo {\n              url\n              width\n              height\n            }\n          }\n        }\n        ... on ProjectListBlockRecord {\n          id\n          projects {\n            id\n            projectName\n            client {\n              company\n              id\n            }\n            skills {\n              id\n              name\n            }\n            role {\n              role\n              id\n              start\n              end\n            }\n            color {\n              hex\n              cssRgb\n              green\n              blue\n              red\n            }\n            summary\n            slug\n            cover {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n                sizes\n                aspectRatio\n                bgColor\n              }\n            }\n          }\n        }\n      }\n      pageIntro\n    }\n  }\n": types.HomePageQueryDocument,
    "\n  query ProjectQuery($slug: String) {\n    project(filter: { slug: { eq: $slug } }) {\n      id\n      projectName\n      cover {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n          webpSrcSet\n        }\n        url\n      }\n      slug\n      summary\n      role {\n        role\n        start\n        end\n      }\n      skills {\n        name\n        id\n      }\n      client {\n        id\n        website\n        company\n        logo {\n          url\n          width\n          height\n        }\n      }\n      color {\n        hex\n        cssRgb\n      }\n      body {\n        blocks {\n          __typename\n          ... on FlowBlockRecord {\n            __typename\n            id\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            description\n          }\n          ... on MobileStackRecord {\n            __typename\n            id\n            title\n            description\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on BeforeAfterBlockRecord {\n            id\n            title\n            description\n            left {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            right {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on FeaturephotoblockRecord {\n            id\n            title\n            description\n            span\n            padding\n            image {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on SectionBlockRecord {\n            id\n            subtitle\n            sectionTitle\n          }\n          ... on SliderShowcaseBlockRecord {\n            id\n            blocks {\n              imageTitle\n              description\n              id\n              images {\n                responsiveImage {\n                  src\n                  srcSet\n                  base64\n                  width\n                  height\n                  alt\n                  title\n                  webpSrcSet\n                }\n              }\n            }\n          }\n          ... on ProcessListBlockRecord {\n            id\n            blocks {\n              id\n              icon\n              processDescription\n              title\n            }\n          }\n          ... on FeaturephotoblockRecord {\n            id\n            image {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            title\n            description\n            span\n          }\n          ... on StatListRecord {\n            id\n            blocks {\n              id\n              label\n              value\n            }\n          }\n          ... on ProjectOverviewBlockRecord {\n            id\n            projectDescription\n            client {\n              id\n              website\n              company\n              logo {\n                url\n                width\n                height\n              }\n            }\n          }\n          ... on ThemedImageBlockRecord {\n            id\n            description\n            imageTitle\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            contentPadding\n          }\n        }\n        value\n      }\n      meta: _seoMetaTags(locale: en) {\n        attributes\n        content\n        tag\n      }\n      seo {\n        title\n        noIndex\n        description\n        image {\n          url(imgixParams: { crop: top, h: \"630\", w: \"1200\" })\n        }\n        twitterCard\n      }\n    }\n  }\n": types.ProjectQueryDocument,
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
export function graphql(source: "\n  query LabsQuery {\n    allLabs {\n      title\n      url\n      id\n      description(markdown: false)\n      images {\n        id\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n          webpSrcSet\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query LabsQuery {\n    allLabs {\n      title\n      url\n      id\n      description(markdown: false)\n      images {\n        id\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n          webpSrcSet\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AboutQuery {\n    about {\n      seo: _seoMetaTags {\n        attributes\n        content\n        tag\n      }\n      body {\n        __typename\n        ... on ProjectOverviewBlockRecord {\n          id\n          projectDescription\n          client {\n            id\n            website\n            company\n            logo {\n              url\n              width\n              height\n            }\n          }\n        }\n        ... on ProcessListBlockRecord {\n          id\n          blocks {\n            id\n            icon\n            processDescription\n            title\n            customIcon {\n              url\n              width\n              height\n            }\n          }\n        }\n        ... on FeaturephotoblockRecord {\n          id\n          image {\n            responsiveImage {\n              src\n              srcSet\n              base64\n              width\n              height\n              alt\n              title\n              webpSrcSet\n            }\n          }\n          title\n          description\n          span\n        }\n        ... on ExperienceListBlockRecord {\n          id\n          experiences {\n            id\n            client {\n              company\n            }\n            role\n            start\n            end\n          }\n        }\n        ... on SectionBlockRecord {\n          id\n          subtitle\n          sectionTitle\n        }\n        ... on ClientsBlockRecord {\n          id\n          clients {\n            id\n            company\n            logo {\n              url\n              width\n              height\n            }\n          }\n        }\n      }\n      intro\n    }\n    site: _site {\n      favicon: faviconMetaTags {\n        attributes\n        content\n        tag\n      }\n    }\n  }\n"): (typeof documents)["\n  query AboutQuery {\n    about {\n      seo: _seoMetaTags {\n        attributes\n        content\n        tag\n      }\n      body {\n        __typename\n        ... on ProjectOverviewBlockRecord {\n          id\n          projectDescription\n          client {\n            id\n            website\n            company\n            logo {\n              url\n              width\n              height\n            }\n          }\n        }\n        ... on ProcessListBlockRecord {\n          id\n          blocks {\n            id\n            icon\n            processDescription\n            title\n            customIcon {\n              url\n              width\n              height\n            }\n          }\n        }\n        ... on FeaturephotoblockRecord {\n          id\n          image {\n            responsiveImage {\n              src\n              srcSet\n              base64\n              width\n              height\n              alt\n              title\n              webpSrcSet\n            }\n          }\n          title\n          description\n          span\n        }\n        ... on ExperienceListBlockRecord {\n          id\n          experiences {\n            id\n            client {\n              company\n            }\n            role\n            start\n            end\n          }\n        }\n        ... on SectionBlockRecord {\n          id\n          subtitle\n          sectionTitle\n        }\n        ... on ClientsBlockRecord {\n          id\n          clients {\n            id\n            company\n            logo {\n              url\n              width\n              height\n            }\n          }\n        }\n      }\n      intro\n    }\n    site: _site {\n      favicon: faviconMetaTags {\n        attributes\n        content\n        tag\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HomePageQuery {\n    site: _site {\n      favicon: faviconMetaTags {\n        attributes\n        content\n        tag\n      }\n    }\n    util {\n      noise {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n          webpSrcSet\n        }\n      }\n      noiseGradient {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n          webpSrcSet\n        }\n      }\n    }\n    miniProjects: allProjects {\n      id\n      slug\n      projectName\n      client {\n        company\n      }\n      cover {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n          webpSrcSet\n          sizes\n          aspectRatio\n          bgColor\n        }\n      }\n    }\n    home {\n      seo: _seoMetaTags {\n        attributes\n        content\n        tag\n      }\n      body {\n        __typename\n        ... on SectionBlockRecord {\n          id\n          subtitle\n          sectionTitle\n        }\n        ... on ClientsBlockRecord {\n          id\n          clients {\n            id\n            description\n            company\n            logo {\n              url\n              width\n              height\n            }\n          }\n        }\n        ... on ProjectListBlockRecord {\n          id\n          projects {\n            id\n            projectName\n            client {\n              company\n              id\n            }\n            skills {\n              id\n              name\n            }\n            role {\n              role\n              id\n              start\n              end\n            }\n            color {\n              hex\n              cssRgb\n              green\n              blue\n              red\n            }\n            summary\n            slug\n            cover {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n                sizes\n                aspectRatio\n                bgColor\n              }\n            }\n          }\n        }\n      }\n      pageIntro\n    }\n  }\n"): (typeof documents)["\n  query HomePageQuery {\n    site: _site {\n      favicon: faviconMetaTags {\n        attributes\n        content\n        tag\n      }\n    }\n    util {\n      noise {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n          webpSrcSet\n        }\n      }\n      noiseGradient {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n          webpSrcSet\n        }\n      }\n    }\n    miniProjects: allProjects {\n      id\n      slug\n      projectName\n      client {\n        company\n      }\n      cover {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n          webpSrcSet\n          sizes\n          aspectRatio\n          bgColor\n        }\n      }\n    }\n    home {\n      seo: _seoMetaTags {\n        attributes\n        content\n        tag\n      }\n      body {\n        __typename\n        ... on SectionBlockRecord {\n          id\n          subtitle\n          sectionTitle\n        }\n        ... on ClientsBlockRecord {\n          id\n          clients {\n            id\n            description\n            company\n            logo {\n              url\n              width\n              height\n            }\n          }\n        }\n        ... on ProjectListBlockRecord {\n          id\n          projects {\n            id\n            projectName\n            client {\n              company\n              id\n            }\n            skills {\n              id\n              name\n            }\n            role {\n              role\n              id\n              start\n              end\n            }\n            color {\n              hex\n              cssRgb\n              green\n              blue\n              red\n            }\n            summary\n            slug\n            cover {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n                sizes\n                aspectRatio\n                bgColor\n              }\n            }\n          }\n        }\n      }\n      pageIntro\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ProjectQuery($slug: String) {\n    project(filter: { slug: { eq: $slug } }) {\n      id\n      projectName\n      cover {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n          webpSrcSet\n        }\n        url\n      }\n      slug\n      summary\n      role {\n        role\n        start\n        end\n      }\n      skills {\n        name\n        id\n      }\n      client {\n        id\n        website\n        company\n        logo {\n          url\n          width\n          height\n        }\n      }\n      color {\n        hex\n        cssRgb\n      }\n      body {\n        blocks {\n          __typename\n          ... on FlowBlockRecord {\n            __typename\n            id\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            description\n          }\n          ... on MobileStackRecord {\n            __typename\n            id\n            title\n            description\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on BeforeAfterBlockRecord {\n            id\n            title\n            description\n            left {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            right {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on FeaturephotoblockRecord {\n            id\n            title\n            description\n            span\n            padding\n            image {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on SectionBlockRecord {\n            id\n            subtitle\n            sectionTitle\n          }\n          ... on SliderShowcaseBlockRecord {\n            id\n            blocks {\n              imageTitle\n              description\n              id\n              images {\n                responsiveImage {\n                  src\n                  srcSet\n                  base64\n                  width\n                  height\n                  alt\n                  title\n                  webpSrcSet\n                }\n              }\n            }\n          }\n          ... on ProcessListBlockRecord {\n            id\n            blocks {\n              id\n              icon\n              processDescription\n              title\n            }\n          }\n          ... on FeaturephotoblockRecord {\n            id\n            image {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            title\n            description\n            span\n          }\n          ... on StatListRecord {\n            id\n            blocks {\n              id\n              label\n              value\n            }\n          }\n          ... on ProjectOverviewBlockRecord {\n            id\n            projectDescription\n            client {\n              id\n              website\n              company\n              logo {\n                url\n                width\n                height\n              }\n            }\n          }\n          ... on ThemedImageBlockRecord {\n            id\n            description\n            imageTitle\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            contentPadding\n          }\n        }\n        value\n      }\n      meta: _seoMetaTags(locale: en) {\n        attributes\n        content\n        tag\n      }\n      seo {\n        title\n        noIndex\n        description\n        image {\n          url(imgixParams: { crop: top, h: \"630\", w: \"1200\" })\n        }\n        twitterCard\n      }\n    }\n  }\n"): (typeof documents)["\n  query ProjectQuery($slug: String) {\n    project(filter: { slug: { eq: $slug } }) {\n      id\n      projectName\n      cover {\n        responsiveImage {\n          src\n          srcSet\n          base64\n          width\n          height\n          alt\n          title\n          webpSrcSet\n        }\n        url\n      }\n      slug\n      summary\n      role {\n        role\n        start\n        end\n      }\n      skills {\n        name\n        id\n      }\n      client {\n        id\n        website\n        company\n        logo {\n          url\n          width\n          height\n        }\n      }\n      color {\n        hex\n        cssRgb\n      }\n      body {\n        blocks {\n          __typename\n          ... on FlowBlockRecord {\n            __typename\n            id\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            description\n          }\n          ... on MobileStackRecord {\n            __typename\n            id\n            title\n            description\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on BeforeAfterBlockRecord {\n            id\n            title\n            description\n            left {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            right {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on FeaturephotoblockRecord {\n            id\n            title\n            description\n            span\n            padding\n            image {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n          }\n          ... on SectionBlockRecord {\n            id\n            subtitle\n            sectionTitle\n          }\n          ... on SliderShowcaseBlockRecord {\n            id\n            blocks {\n              imageTitle\n              description\n              id\n              images {\n                responsiveImage {\n                  src\n                  srcSet\n                  base64\n                  width\n                  height\n                  alt\n                  title\n                  webpSrcSet\n                }\n              }\n            }\n          }\n          ... on ProcessListBlockRecord {\n            id\n            blocks {\n              id\n              icon\n              processDescription\n              title\n            }\n          }\n          ... on FeaturephotoblockRecord {\n            id\n            image {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            title\n            description\n            span\n          }\n          ... on StatListRecord {\n            id\n            blocks {\n              id\n              label\n              value\n            }\n          }\n          ... on ProjectOverviewBlockRecord {\n            id\n            projectDescription\n            client {\n              id\n              website\n              company\n              logo {\n                url\n                width\n                height\n              }\n            }\n          }\n          ... on ThemedImageBlockRecord {\n            id\n            description\n            imageTitle\n            images {\n              responsiveImage {\n                src\n                srcSet\n                base64\n                width\n                height\n                alt\n                title\n                webpSrcSet\n              }\n            }\n            contentPadding\n          }\n        }\n        value\n      }\n      meta: _seoMetaTags(locale: en) {\n        attributes\n        content\n        tag\n      }\n      seo {\n        title\n        noIndex\n        description\n        image {\n          url(imgixParams: { crop: top, h: \"630\", w: \"1200\" })\n        }\n        twitterCard\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DatoImage_responsiveImage on ResponsiveImage {\n    srcSet\n    webpSrcSet\n    sizes\n    src\n    width\n    height\n    aspectRatio\n    alt\n    title\n    base64\n  }\n"): (typeof documents)["\n  fragment DatoImage_responsiveImage on ResponsiveImage {\n    srcSet\n    webpSrcSet\n    sizes\n    src\n    width\n    height\n    aspectRatio\n    alt\n    title\n    base64\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;