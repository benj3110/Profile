
import ShortNavbar from "../../components/navbar/ShortNavbar";
import styles from "./AboutFullPage.module.scss"
const AboutFullPage = () => {
    return (
        <div className={styles.PageContainer}>
            <ShortNavbar />
            <div className={styles.PageContent}>
                <section className={styles.Section1Container} id="whoami">
                    <div className={`${styles.Titlewrapper}`} data-text="about me">
                        <h1 className={`${styles.Title}`}>
                            About Me
                        </h1>
                    </div>
                    <div className={styles.Section1Content} >
                        <h2 className={styles.AboutMeParagraphTitle}>Who Am I</h2>
                        <div className={styles.TitleUnderLine} />
                        <p className={styles.Text}>I’m Benito, a 25-year-old software engineer passionate about crafting innovative solutions to real-world problems.
                            With a strong foundation in engineering and a knack for problem-solving, I thrive in environments where I can use my creativity and precision.
                        </p>
                        <p className={styles.Text}>
                            What I love most about software development is its blend of logic and creativity, keeping me constantly engaged and motivated.
                            I embrace all opportunities to learn and grow, from mastering new languages and concepts to refining teamwork and collaboration skills.
                        </p>
                        <p className={styles.Text}>
                            Every challenge is a chance to evolve, and become a better developer.
                        </p>
                    </div>
                    {/* <img src="/kayakingCropped.jpg" className={styles.ProfilePic}></img> */}
                </section>
                <section className={styles.SectionContainer} id="experience">
                    <h2 className={styles.AboutMeParagraphTitle}>Experience</h2>
                    <div className={styles.TitleUnderLine} />
                    <p className={styles.ExpTitle}>Software Engineer - Raytheon</p>
                    <p className={styles.Text}>Built multiple engaging applications, from conception to lauch and maintenace</p>
                    <p className={styles.Text}>Assumed leadership roles across various projects, excelling in both technical and organisational expertise</p>
                    <p className={styles.Text}>Worked as a full-stack engineer developing sercure and efficient APIs, smart and interactive UIs and building reliable infrastructure that intergrates with applications seemlessly</p>
                    <p className={styles.Text}>Experienced in agile methodologies and continuous value delivery. Frequently assumed a Scrum Master role, leading retros and sprint planning sessions</p>
                    <p className={styles.Text}>Delivered presentations and workshops on project progress and company specific topics to spread knowledge and promote collaboration</p>
                </section>
                <section className={styles.SectionContainer} id="skills">
                    <h2 className={styles.AboutMeParagraphTitle}>Skills</h2>
                    <div className={styles.TitleUnderLine} />

                    <p className={styles.ExpTitle}>Languages & Tools</p>
                    <ul className={styles.SkillsList}>
                        <li className={styles.PillList}>JavaScript</li>
                        <li className={styles.PillList}>TypeScript</li>
                        <li className={styles.PillList}>React</li>
                        <li className={styles.PillList}>Node/Express</li>
                        <li className={styles.PillList}>CSS/SCSS</li>
                        <li className={styles.PillList}>MongoDB</li>
                        <li className={styles.PillList}>SQL</li>
                        <li className={styles.PillList}>Docker</li>
                        <li className={styles.PillList}>Cypress</li>
                        <li className={styles.PillList}>Python</li>
                        <li className={styles.PillList}>Matlab</li>
                        <li className={styles.PillList}>BASH</li>
                        <li className={styles.PillList}>MUI</li>
                        <li className={styles.PillList}>Tailwind</li>
                        <li className={styles.PillList}>Figma</li>
                        <li className={styles.PillList}>Jest</li>
                        <li className={styles.PillList}>Git/Github</li>
                        <li className={styles.PillList}>Swagger</li>
                        <li className={styles.PillList}>Jira</li>
                    </ul>
                    <p className={styles.ExpTitle}>AWS</p>
                    <ul className={styles.SkillsList}>
                        <li className={styles.PillList}>CCP Certified</li>
                        <li className={styles.PillList}>Lambda</li>
                        <li className={styles.PillList}>EC2</li>
                        <li className={styles.PillList}>IAM</li>
                        <li className={styles.PillList}>ECS/ECR</li>
                        <li className={styles.PillList}>Fargate</li>
                        <li className={styles.PillList}>Cognito</li>
                        <li className={styles.PillList}>Amplify</li>
                        <li className={styles.PillList}>DynamoDB</li>
                        <li className={styles.PillList}>DocumentDB</li>
                        <li className={styles.PillList}>RDS/MariaDB</li>
                        <li className={styles.PillList}>S3</li>
                        <li className={styles.PillList}>Inspector</li>
                        <li className={styles.PillList}>Cloudwatch</li>
                    </ul>
                </section>
            </div>
        </div>);
}

export default AboutFullPage;