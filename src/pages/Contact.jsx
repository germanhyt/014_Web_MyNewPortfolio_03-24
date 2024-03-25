import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
	return (

		<div className='pt-20 mt-28 bg-primary-light dark:bg-secondary-dark '>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.5,
					delay: 0.1,
				}}
				className="container mx-auto flex flex-col-reverse lg:flex-row  "
			>
				<ContactForm />
				<ContactDetails />
			</motion.div>
		</div>

	);
};

export default Contact;
