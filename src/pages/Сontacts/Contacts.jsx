import ContactsStyle from '../Сontacts/Contacts.module.scss';

const Contacts = () => {
  return (
    <div className={ContactsStyle.container}>
      <div className={ContactsStyle.info}>
        Whether planning a&nbsp;workshop, needing a&nbsp;speaker for an&nbsp;event, or&nbsp;seeking expert advice on&nbsp;branding and&nbsp;design, I&nbsp;am&nbsp;ready to bring my&nbsp;expertise to your next project.
      </div>
      <p className={ContactsStyle.smalInfo}>Let's make a lasting impact together!</p>
    </div>
  );
}

export default Contacts;