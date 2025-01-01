import Image from "next/image";
import { getProjects } from "../services/folio.service.tsx";
import BasicInfo from "./components/BasicInfo/index.tsx";
import Projects from "./components/Projects/index.tsx";
import WorkExperience from "./components/WorkExperience/index.tsx";
import Skillset from "./components/Skillset/index.tsx";

export default async function Home() {
  const projects = await getProjects();
  console.log(projects);
  return (
    <div className="h-full w-4/5 mx-auto m-12 flex flex-wrap gap-y-4 items-start content-start">
      <BasicInfo />
      <Projects />
      <WorkExperience />
      <Skillset />
    </div>
  );
}
