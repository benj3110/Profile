import styles from "../../css/Top/WelcomeScreen.module.scss"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Navbar from "./Navbar";

const WelcomeScreen: React.FC = () => {


    return (
        <section id="welcomeScreen" className={styles.Screen}>
            <Navbar />
            <div className={styles.WelcomeScreenContainer}>
                <div className={styles.WelcomeScreenBox}>
                    <h1 className={styles.Name}>Benito Varghese</h1>
                    <p className={styles.Job}>Full-Stack Software Engineer</p>
                    <div className={styles.Background}></div>
                    <Player
                        autoplay
                        loop
                        src="/LaptopAnimation.json"
                        className={styles.Animation}
                    // style={{ height: '400px', width: '400px' }}
                    >
                        <Controls visible={false} />
                    </Player>
                </div>
            </div >
        </section>
    );
}

export default WelcomeScreen;