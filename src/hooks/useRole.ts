import { ExperienceRecord, Maybe } from "@/gql/graphql";

export const useRole = (role: Maybe<ExperienceRecord> | undefined) => {
  if (!role) return { year: undefined };
  const year = new Date(role.start).getFullYear();
  return { year };
};
