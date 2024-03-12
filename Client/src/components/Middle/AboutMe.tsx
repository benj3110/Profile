import ProfileCard from "./ProfileCard";
import styles from "../../css/Middle/AboutMe.module.scss"

const AboutMe: React.FC = () => {
    return (
        <section className={styles.SectionContainer} id="profile">
            <ProfileCard>
                <div className={styles.AboutCard}>
                    <h2 className={styles.cardTitle}>About Me</h2>
                    <p>Experience</p>
                    <p>Goals</p>
                </div>
            </ProfileCard>
            <div className={styles.SkillsAndQualificationsContainer}>
                <ProfileCard>
                    <div className={styles.SkillsCard}>
                        <h2 className={styles.cardTitle}>Skills</h2>
                        <p>React</p>
                        <p>AWS</p>
                    </div>
                </ProfileCard>
                <div className={styles.SkillsQualSeparator}></div>
                <ProfileCard>
                    <div className={styles.QualificationsCard}>
                        <h2 className={styles.cardTitle}>Qualifications</h2>
                        <p>AWS CCP/Solutions</p>
                        <p>REACT uDemy</p>
                    </div>
                </ProfileCard>
            </div>
        </section>);
}

export default AboutMe;