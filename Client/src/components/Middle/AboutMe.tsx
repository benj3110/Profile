import ProfileCard from "./ProfileCard";
import styles from "../../css/Middle/AboutMe.module.scss"

const AboutMe: React.FC = () => {
    return (<div className={styles.SectionContainer} id="profile">
        <div className={styles.AboutContainer}>
            <section id="about">
                <ProfileCard>
                    <div className={styles.AboutCard}>
                        <h2>About Me</h2>
                        <p>Experience</p>
                        <p>Goals</p>
                    </div>
                </ProfileCard>
            </section>
        </div>
        <div className={styles.SkillsAndQualificationsContainer}>
            <div className={styles.SkillsContainer}>
                <section id="skills">
                    <ProfileCard>
                        <div className={styles.SkillsCard}>
                            <h2>Skills</h2>
                            <p>React</p>
                            <p>AWS</p>
                        </div>
                    </ProfileCard>
                </section>
            </div>
            <div className={styles.QualificationsContainer}>
                <section id="qualifications">
                    <ProfileCard>
                        <div className={styles.QualificationsCard}>
                            <h2>Qualifications</h2>
                            <p>AWS CCP/Solutions</p>
                            <p>REACT uDemy</p>
                        </div>
                    </ProfileCard>
                </section>
            </div>
        </div>
    </div>);
}

export default AboutMe;