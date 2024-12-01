import { useState } from "react";
import styles from "./ContactsPage.module.scss"
import useInView from "../../hooks/useInView";
const ContactsPage = () => {
    const [isCopied, setIsCopied] = useState('Copy Email')
    const inView = useInView(0.1); // Trigger when 10% of the element is visible

    return (
        <section className={styles.SectionContainer} id="contacts">
            <div className={styles.TitleContainer}>
                <h1 className={styles.Title}>Get in</h1>
                <h1 className={styles.Title}>Touch</h1>
                <div className={styles.TitleUnderLine} />
                <p className={styles.ContactMeTagline}>benitovark@gmail.com</p>
            </div>
            <div className={styles.ImageContainer}>
                <div className={styles.Image1Container}>
                    <img
                        className={inView ? `${styles.Image} ${styles.Image1}` : styles.ImageNoAni}
                        src="/uniformEmailiconbgless.png"
                        onClick={() => {
                            navigator.clipboard.writeText('benitovark@gmail.com');
                            setIsCopied("Copied!")
                            setTimeout(() => {
                                setIsCopied("Copy Email")
                            }, 3000);
                        }}></img>
                    <div className={`${styles.Tooltip} ${styles.Tooltip1}`}>{isCopied}</div>
                </div>
                <div className={styles.Image1Container}>
                    <img
                        className={inView ? `${styles.Image} ${styles.Image2}` : styles.ImageNoAni}
                        src="/uniformLinkediconbgless.png"
                        onClick={() => window.open("https://www.linkedin.com/in/benito-varghese-1a0451194")}
                    ></img>
                    <div className={`${styles.Tooltip} ${styles.Tooltip2}`}>LinkedIn</div>
                </div>
                <div className={styles.Image1Container}>
                    <img
                        className={inView ? `${styles.Image} ${styles.Image3}` : styles.ImageNoAni}
                        src="/uniformGithubiconbgless.png"
                        onClick={() => window.open("https://github.com/benj3110")}
                    ></img>
                    <div className={`${styles.Tooltip} ${styles.Tooltip3}`}>Github</div>
                </div>
            </div>
        </section>);
}

export default ContactsPage;