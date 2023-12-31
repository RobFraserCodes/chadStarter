import Link from "next/link";
import { Card } from "~/components/ui/card";
import { getProjects } from "./action";
import CreateProjectModal from "./create-project-modal";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="grid grid-cols-4 gap-4 ">
      {projects.map((project) => (
        <Card
          role="button"
          key={project.id}
          className="relative flex flex-col items-center justify-center gap-y-2.5 p-8 text-center hover:bg-accent"
        >
          <h4 className="font-medium ">{project.name}</h4>
          <p className=" text-muted-foreground">{project.website}</p>
          <Link
            href={`/dashboard/projects/${project.id}`}
            className="absolute inset-0 "
          >
            <span className="sr-only">View project details</span>
          </Link>
        </Card>
      ))}

      <CreateProjectModal />
    </div>
  );
}
