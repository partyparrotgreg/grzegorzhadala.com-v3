import { request } from "@/lib/dato";

import query from "./page.graphql";
const getHomepageContent = async () => await request(query);

export default async function Home() {
  const { projects, experiences } = await getHomepageContent();
  return (
    <div className="bg-slate-400">
      <h1>Index</h1>
      {/* <SimpleHeader />
      <HomeFeature />
      {projects.map((project) => (
        <ProjectCard project={project as ProjectRecord} key={project.id} />
      ))}
      <ProjectListLines experiences={experiences} /> */}
    </div>
  );
}
