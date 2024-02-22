import { ContactsList, Email } from "../../data/ContactsList";
import ContactsCard from "./ContactsCard";
import styles from "../../css/Middle/Contacts.module.scss"

const Contacts: React.FC = () => {
    return (<div className={styles.SectionContainer}>
        <h1 className={styles.ContactsHeader}> Contact Me</h1>
        <section id="contacts">
            <div className={styles.ContactsListContainer}>
                {ContactsList.map((contact) => (
                    <ContactsCard key={contact.title}>
                        <a href={contact.link} className={styles.ContactCardContents}>
                            <div className={styles.ContactTitle}>{contact.title}</div>
                            <img src={contact.icon} alt={contact.title} className={styles.ContactsLogos} />
                        </a>
                    </ContactsCard>
                ))}
                <ContactsCard>
                    <div className={styles.ContactCardContents}>
                        <div className={styles.ContactTitle}>{Email.title}</div>
                        <img src={Email.icon} alt={Email.title} className={styles.ContactsLogos} />
                    </div>
                </ContactsCard>
            </div>
            <span className={styles.ContactsInfo}>
                contact me yea
            </span>
        </section>
    </div>);
}

export default Contacts;