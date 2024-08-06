import ProfileCard from "./ProfileCard";
import styles from "./AboutMe.module.scss"
// import Navbar from "../navbar/Navbar";

const AboutMe: React.FC = () => {
    return (
        <section className={styles.SectionContainer} id="profile">
            {/* <Navbar /> */}
            <div className={styles.Content}>
                <div className={styles.LeftColum}>
                    <ProfileCard>
                        <div className={styles.AboutCard}>
                            <div className={styles.CardContent}>
                                <h2 className={styles.CardTitle}>About Me</h2>
                                <div className={styles.AboutParagraphs}>
                                    <p className={styles.AboutParagraph}>
                                        I'm a highly skilled and versatile software engineer with a passion for creating efficient and innovative web applications. With a background in mechanical engineering, I bring a unique blend of technical and problem-solving abilities to the table.
                                    </p>
                                    <p className={styles.AboutParagraph}>
                                        My experience spans from designing stylish and accessible user interfaces to developing secure APIs and data management as a software engineer at Raytheon UK.
                                    </p>
                                    <p className={styles.AboutParagraph}>
                                        Outside of work I love tennis and films so if you're looking for someone to rally with or catch the newest sci-fi flick thing I'm your guy!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ProfileCard>
                    <ProfileCard>
                        <div className={styles.QualificationsCard}>
                            <div className={styles.CardContent}>
                                <h2 className={styles.CardTitle}>Qualifications</h2>
                                <ul className={styles.QualsList}>
                                    <li className={styles.PillList}>Masters in Mechanical Engineering</li>
                                    <li className={styles.PillList}>AWS Certified Cloud Practitioner</li>
                                </ul>
                            </div>
                        </div>
                    </ProfileCard>
                </div>
                <div className={styles.RightColum}>
                    <ProfileCard>
                        <div className={styles.SkillsCard}>
                            <div className={styles.CardContent}>
                                <h2 className={styles.CardTitle}>Skills</h2>
                                <ul className={styles.SkillsList}>
                                    <li className={styles.PillList}>JavaScript</li>
                                    <li className={styles.PillList}>TypeScript</li>
                                    <li className={styles.PillList}>CSS/SCSS</li>
                                    <li className={styles.PillList}>React</li>
                                    <li className={styles.PillList}>MongoDB</li>
                                    <li className={styles.PillList}>Node/Express</li>
                                    <li className={styles.PillList}>SQL</li>
                                    <li className={styles.PillList}>AWS</li>
                                    <li className={styles.PillList}>Docker</li>
                                    <li className={styles.PillList}>Cypress</li>
                                </ul>
                            </div>
                        </div>
                    </ProfileCard>
                    <ProfileCard>
                        <div className={styles.Experience}>
                            <div className={styles.CardContent}>
                                <h2 className={styles.CardTitle}>Experience</h2>
                                <div className={styles.ExperienceParagraphs}>
                                    <b className={styles.ExpTitle}>Software Engineer at Raytheon UK </b>
                                    <p className={styles.ExperienceParagraph}>
                                        Full stack software engineer building web applications from inception to deployment.
                                    </p>
                                    <p className={styles.ExperienceParagraphMargin}>
                                        I've worked on multiple projects from internal PTO tracking applications to cyber research projects for clients.
                                    </p>
                                    <p className={styles.ExperienceParagraph}>
                                        I've gained valuable experience like leading diverse teams, delivering quality products and industry level technical skills.
                                    </p>


                                </div>
                            </div>
                        </div>
                    </ProfileCard>
                </div>
            </div>

        </section>
    );
}

export default AboutMe;