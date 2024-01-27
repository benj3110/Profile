import ProfileCard from "./ProfileCard";
import styles from "../../css/Middle/AboutMe.module.scss"

const AboutMe: React.FC = () => {
    return (<div className={styles.sectionContainer}>
        <section id="about">
            <ProfileCard>
                <h2>About Me</h2>
                <p>Experience</p>
                <p>Goals</p>
            </ProfileCard>
        </section>
        <section id="skills">
            <ProfileCard>
                <h2>Skills</h2>
                <p>React</p>
                <p>AWS</p>
            </ProfileCard>
        </section>
    </div>);
}

export default AboutMe;