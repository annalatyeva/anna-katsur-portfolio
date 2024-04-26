import ContactsStyle from '../Сontacts/Contacts.module.scss';

import Footer from '../../components/Footer/Footer.jsx';

const Contacts = () => {
  return (
    <>
    <div className={ContactsStyle.container}>
      <div className={ContactsStyle.info}>
        {window.innerWidth > 1023 ?
          `Whether planning a workshop, needing a\u00A0speaker for an event, or seeking expert advice on branding and design, I am ready to bring my expertise to your next project.` : 
          'WHETHER PLANNING A WORKSHOP, NEEDING A SPEAKER FOR AN EVENT, OR SEEKING EXPERT ADVICE ON BRANDING AND DESIGN, I AM READY TO BRING MY EXPERTISE TO YOUR NEXT PROJECT.'}
      </div>
      <p className={ContactsStyle.smalInfo}>Let's make a lasting impact together!</p>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Contacts;