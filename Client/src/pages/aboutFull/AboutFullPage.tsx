import ShortNavbar from "../../components/navbar/ShortNavbar";
import styles from "./AboutFullPage.module.scss"
const AboutFullPage = () => {
    return (
        <div className={styles.PageContainer}>
            <ShortNavbar />
            <div className={styles.PageContent}>
                <div className={`${styles.Titlewrapper}`} data-text="about me">
                    <h1 className={`${styles.Title}`}>
                        About Me
                        {/* <div className={styles.stack}>
                            <span style={{ zIndex: '0' }}>About Me</span>s
                            <span style={{ zIndex: '1' }}>About Me</span>
                            <span style={{ zIndex: '2' }}>About Me</span>
                        </div> */}
                    </h1>
                </div>
                <h2 className={styles.AboutMeParagraphTitle}>Who Am I</h2>
                <div className={styles.TitleUnderLine} />
                <p className={styles.Text}>I create engaging digital experiences.</p>
                <p className={styles.Text}>Since joining the world of web dev I've learnt how to solve complex  </p>

                <h2 className={styles.AboutMeParagraphTitle}>Experience</h2>
                <div className={styles.TitleUnderLine} />
                <p className={styles.Text}>Raytheon, web dev, tech stack and what ive used them for, mech eng, aws ccp</p>
                <h2 className={styles.AboutMeParagraphTitle}>Skills</h2>
                <div className={styles.TitleUnderLine} />
                <p className={styles.Text}>JS/TS, React, Node, AWS, Docker, etc</p>
            </div>
        </div>);
}

export default AboutFullPage;