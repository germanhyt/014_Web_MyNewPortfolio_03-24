import { motion } from "framer-motion";
import SectionAboutMe from "../components/reusable/SectionAboutMe";
import SectionTechs from "../components/reusable/SectionTechs";

const About = () => {
  return (
    <motion.div
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.1,
      }}
      className="mt-28 py-1 bg-primary-light dark:bg-secondary-dark "
    >
      <SectionAboutMe />
      <SectionTechs />
    </motion.div>
  );
};

export default About;
