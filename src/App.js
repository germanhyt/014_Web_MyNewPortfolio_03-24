import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppHeader from "./components/shared/AppHeader";
import AppFooter from "./components/shared/AppFooter";
import "./css/App.css";
import "./css/customStyles.css";
import UseScrollToTop from "./hooks/useScrollToTop";
import { projectsData } from "./data/projects";
import ButtonWhatsapp from "./components/reusable/ButtonWhatsapp";

//
const About = lazy(() => import("./pages/AboutMe"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectSingle = lazy(() => import("./pages/ProjectSingle.jsx"));

function App() {
  return (
    <AnimatePresence>
      <div className="m-0 p-0 border-none box-border transition duration-300 bg-secondary-light dark:bg-primary-dark">
        <ButtonWhatsapp />

        <Router>
          <ScrollToTop />
          <AppHeader />
          <Suspense fallback={""}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="projects" element={<Projects />} />
              {projectsData.map((project) => (
                <Route
                  key={project.id}
                  path={`projects/single-project/${project.id}`}
                  element={
                    <ProjectSingle
                      number={project.id}
                      title={project.title}
                      category={project.category}
                      img={project.img}
                    />
                  }
                />
              ))}
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <AppFooter />
        </Router>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;
