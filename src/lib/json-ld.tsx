import { siteConfig } from "./site-config";

type JsonLdObject = Record<string, unknown>;

function withContext(obj: JsonLdObject): JsonLdObject {
  return { "@context": "https://schema.org", ...obj };
}

export function personJsonLd(
  opts: {
    description?: string;
    image?: string;
    sameAs?: string[];
    knowsAbout?: string[];
    worksFor?: { name: string; url?: string };
    alumniOf?: { name: string }[];
  } = {},
): JsonLdObject {
  return {
    "@type": "Person",
    name: siteConfig.author.name,
    alternateName: siteConfig.author.shortName,
    jobTitle: siteConfig.author.jobTitle,
    url: siteConfig.author.url,
    ...(opts.description && { description: opts.description }),
    ...(opts.image && { image: opts.image }),
    ...(opts.sameAs?.length && { sameAs: opts.sameAs }),
    ...(opts.knowsAbout?.length && { knowsAbout: opts.knowsAbout }),
    ...(opts.worksFor && {
      worksFor: {
        "@type": "Organization",
        name: opts.worksFor.name,
        ...(opts.worksFor.url && { url: opts.worksFor.url }),
      },
    }),
    ...(opts.alumniOf?.length && {
      alumniOf: opts.alumniOf.map((school) => ({
        "@type": "EducationalOrganization",
        name: school.name,
      })),
    }),
  };
}

export function webSiteJsonLd(): JsonLdObject {
  return withContext({
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    author: personJsonLd(),
  });
}

export function profilePageJsonLd(opts: {
  description?: string;
  image?: string;
  sameAs?: string[];
  knowsAbout?: string[];
  worksFor?: { name: string; url?: string };
  alumniOf?: { name: string }[];
}): JsonLdObject {
  return withContext({
    "@type": "ProfilePage",
    mainEntity: personJsonLd(opts),
  });
}

export function projectJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  image?: string;
  dateCreated?: string;
  dateModified?: string;
  skills?: string[];
  client?: { name: string; url?: string; logo?: string };
}): JsonLdObject {
  return withContext({
    "@type": "CreativeWork",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    ...(opts.image && { image: opts.image }),
    ...(opts.dateCreated && { dateCreated: opts.dateCreated }),
    ...(opts.dateModified && { dateModified: opts.dateModified }),
    creator: personJsonLd(),
    ...(opts.client && {
      sourceOrganization: {
        "@type": "Organization",
        name: opts.client.name,
        ...(opts.client.url && { url: opts.client.url }),
        ...(opts.client.logo && { logo: opts.client.logo }),
      },
    }),
    ...(opts.skills?.length && { keywords: opts.skills.join(", ") }),
  });
}

export function JsonLdScript({ data }: { data: JsonLdObject }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
