import styles from "./ContactsPage.module.scss"
const ContactsPage = () => {
    return (<section className={styles.SectionContainer} id="contacts">
        <div className={styles.TitleContainer}>
            <h1 className={styles.Title}>Get in</h1>
            <h1 className={styles.Title}>Touch</h1>
            <div className={styles.TitleUnderLine} />
            <span className={styles.ContactMeTagline}>Email</span>
            <span className={styles.ContactMeTagline}>LindedIn</span>
        </div>
    </section>);
}

export default ContactsPage;