import Navbar from "../../components/navbar/Navbar";
import styles from "./AboutFullPage.module.scss"
const AboutFullPage = () => {
    return (
        <div className={styles.PageContainer}>
            <Navbar />
            <div className={styles.PageContent}>
                <div className={`${styles.Glitchwrapper}`} data-text="about me">
                    <h1 className={` ${styles.Glitch} `}>
                        about me
                    </h1>
                </div>
            </div>
        </div>);
}

export default AboutFullPage;