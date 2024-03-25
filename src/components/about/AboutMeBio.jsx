import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-20 sm:mt-20" >
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src="https://res.cloudinary.com/dz0ajaf3i/image/upload/v1697213094/006_Portfolio_Freelance/img-avatar-me_v3hl9a.png"
					className="rounded-lg w-96"
					alt=""
				/>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
};

export default AboutMeBio;
