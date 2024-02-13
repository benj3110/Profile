import { ContactsList } from "../../data/ContactsList";
import ContactsCard from "./ContactsCard";
import styles from "../../css/Middle/Contacts.module.scss"

const Contacts: React.FC = () => {
    return (<div className={styles.SectionContainer}>
        <section id="contacts">
            <div className={styles.ContactsListContainer}>
                {ContactsList.map((contact) => (
                    <ContactsCard>
                        {contact.title}
                        <img src={contact.icon} alt={contact.title} className={styles.ContactsLogos} />
                    </ContactsCard>
                ))}
            </div>
            <span className={styles.ContactsInfo}>
                Paragraph about contacting me
            </span>
        </section>
    </div>);
}

export default Contacts;