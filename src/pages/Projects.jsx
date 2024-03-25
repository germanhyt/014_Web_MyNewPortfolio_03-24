import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Projects = () => {
	return (
		<div className='bg-primary-light dark:bg-secondary-dark '>
			<ProjectsProvider>
				<div className="pt-10 mt-28">
					<ProjectsGrid page="projects" />
				</div>
			</ProjectsProvider>
		</div>

	);
};

export default Projects;
