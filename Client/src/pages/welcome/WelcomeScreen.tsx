import styles from "./WelcomeScreen.module.scss"
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const WelcomeScreen: React.FC = () => {


    return (
        <section id="welcomeScreen" className={styles.WelcomeScreenContainer}>
            <div className={styles.WelcomeScreenBox}>
                <div className={styles.Titlewrapper}>
                    <h1 className={styles.Title}>Benito Varghese</h1>
                </div>
                <p className={styles.Job}>Full-Stack Software Engineer</p>
                <div className={styles.Background}></div>
                <Player
                    autoplay
                    loop
                    src="/LaptopAnimation.json"
                    className={styles.Animation}
                >
                    <Controls visible={false} />
                </Player>
            </div>
        </section >
    );
}

export default WelcomeScreen;