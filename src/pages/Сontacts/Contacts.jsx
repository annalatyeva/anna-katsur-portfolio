import ContactsStyle from "../Сontacts/Contacts.module.scss";

const Contacts = () => {
	return (
		<>
			<div className={ContactsStyle.container}>
				<div className={ContactsStyle.info}>WHETHER PLANNING A WORKSHOP, NEEDING A SPEAKER FOR AN EVENT, OR SEEKING EXPERT ADVICE ON BRANDING AND DESIGN, I AM READY TO BRING MY EXPERTISE TO YOUR NEXT PROJECT.</div>
				<p className={ContactsStyle.smalInfo}>Let's make a lasting impact together!</p>
			</div>
		</>
	);
};

export default Contacts;
