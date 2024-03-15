import { faker } from "@faker-js/faker";
import { useMemo } from "react";

export const useProjectData = () => {
  const dummyProjects = Array.from({ length: 10 }).map((_, i) => {
    return {
      id: i,
      client: faker.company.name(),
      role: faker.person.jobTitle(),
      year: 2024,
    };
  });
  const memoizedProjects = useMemo(() => {
    return dummyProjects;
  }, [dummyProjects]);
  return { projects: memoizedProjects };
};
