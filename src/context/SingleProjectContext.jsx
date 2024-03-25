import { useState, createContext } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = (props) => {
	const [singleProjectData, setSingleProjectData] = useState(
		singleProjectDataJson
	);

	const { idProject } = props;

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData, idProject }}
		>
			{props.children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
