// import ProfileCard from "./ProfileCard";
import { useNavigate } from "react-router-dom";
import styles from "./AboutMe.module.scss"
import { Controls, Player } from "@lottiefiles/react-lottie-player";

const AboutMe: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className={styles.SectionContainer} id="profile">
            <div className={styles.Titlewrapper}>
                <h1 className={`${styles.Title} ${styles.A}`}>About</h1>
                <h1 className={`${styles.Title} ${styles.B}`}>Me</h1>
                <div className={styles.TitleUnderLine} />
                <p className={styles.AboutMeTagline}>I love creative problem solving, learning & a bunch of other things!</p>
                <div
                    className={styles.LearnButton}
                    onClick={() => navigate("/about")}>
                    Learn More
                </div>
            </div>
            <div className={styles.Animation}>
                <Player
                    autoplay
                    loop
                    src="/programmer.json"
                >
                    <Controls visible={false} />
                </Player>
            </div>
        </section>
    );
}

export default AboutMe;