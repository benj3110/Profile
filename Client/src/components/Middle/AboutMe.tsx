import ProfileCard from "./ProfileCard";
import styles from "../../css/Middle/AboutMe.module.scss"

const AboutMe: React.FC = () => {
    return (
        <section className={styles.SectionContainer} id="profile">
            <ProfileCard>
                <div className={styles.AboutCard}>
                    <div className={styles.AboutCardContent}>
                        <h2 className={styles.CardTitle}>About Me</h2>
                        <p className={styles.AboutParagraph}>
                            I'm a highly skilled and versatile software engineer with a passion for creating efficient and innovative web applications. With a background in mechanical engineering, I bring a unique blend of technical expertise and problem-solving abilities to the table.
                            <br />
                            <br />
                            Throughout my career, I have honed my skills in a wide range of technologies, including JavaScript, React, TypeScript, Node.js, MongoDB, and AWS. My experience spans from designing stylish and accessible user interfaces to developing secure APIs and implementing agile methodologies for continuous value delivery.
                            <br />
                            <br />
                            What sets me apart is my ability to lead projects from conception to successful completion. I thrive in collaborative environments, fostering teamwork and ensuring direct alignment with product owners to deliver high-quality products.
                        </p>
                    </div>
                </div>
            </ProfileCard>
            <div className={styles.SkillsAndQualificationsContainer}>
                <ProfileCard>
                    <div className={styles.SkillsCard}>
                        <div className={styles.SkillsCardContent}>
                            <h2 className={styles.CardTitle}>Skills</h2>
                            <ul className={styles.SkillsList}>
                                <li><b className={styles.Bold}>Languages:</b> JavaScript, HTML, CSS/SCSS, Python, SQL, JSON, Matlab, Bash</li>
                                <br />
                                <li><b className={styles.Bold}>Libraries & Frameworks:</b> React, TypeScript, MongoDB, Node.js, Express</li>
                                <br />
                                <li><b className={styles.Bold}>Tools & Technologies:</b> AWS, Docker, Figma, Jest, Swagger, Cypress, Git, GitHub, Jira</li>
                            </ul>
                        </div>

                    </div>
                </ProfileCard>
                <div className={styles.SkillsQualSeparator}></div>
                <ProfileCard>
                    <div className={styles.QualificationsCard}>
                        <div className={styles.QualCardContent}>
                            <h2 className={styles.CardTitle}>Qualifications</h2>
                            <ul className={styles.QualsList}>
                                <li>AWS CCP</li>
                                <br />
                                <li>REACT uDemy</li>
                            </ul>
                        </div>
                    </div>
                </ProfileCard>
            </div>
            {/* <section id="projects" className={styles.SectionContainer}></section> */}
        </section>
    );
}

export default AboutMe;