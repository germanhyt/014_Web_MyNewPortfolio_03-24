import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";
import { useEffect, useState } from "react";

const Projects = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      {!show ? (
        <section className="w-screen h-screen flex items-center justify-center">
          <div className="loader">
            {/* <span className="text-white">Loading...</span> */}
          </div>
        </section>
      ) : (
        <div className="bg-primary-light dark:bg-secondary-dark ">
          <ProjectsProvider>
            <div className="pt-10 mt-28">
              <ProjectsGrid page="projects" />
            </div>
          </ProjectsProvider>
        </div>
      )}
    </>
  );
};

export default Projects;
