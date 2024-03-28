import { ContactsList, Email } from "../../data/ContactsList";
import ContactsCard from "./ContactsCard";
import styles from "../../css/Middle/Contacts.module.scss"

const Contacts: React.FC = () => {
    return (
        <section id="contacts" className={styles.SectionContainer}>
            <h1 className={styles.ContactsHeader}>Contact Me</h1>
            <p className={styles.ContactsParagraph}>Want to talk tech or just say hi? Get in touch and make a new connection! </p>
            <div className={styles.ContactsListContainer}>
                <ContactsCard>
                    <div
                        className={styles.ContactCardContents}
                        onClick={() => {
                            navigator.clipboard.writeText(Email.link);
                        }}>
                        <img src={Email.icon} alt={Email.title} className={styles.ContactsLogos} />
                    </div>
                </ContactsCard>
                {ContactsList.map((contact) => (
                    <ContactsCard key={contact.title}>
                        <a href={contact.link} className={styles.ContactCardContents} target="_blank">
                            <img src={contact.icon} alt={contact.title} className={styles.ContactsLogos} />
                        </a>
                    </ContactsCard>
                ))}

            </div>

        </section>
    );
}

export default Contacts;