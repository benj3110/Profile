import styles from "../../css/Top/WelcomeScreen.module.scss"
//import anime from 'animejs';

const WelcomeScreen: React.FC = () => {


    return (
        <div className={styles.WelcomeScreenContainer}>
            <h1 className={styles.Name}>Benito Varghese</h1>
            <p className={styles.Job}>Full-Stack Software Engineer</p>
        </div >);
}

export default WelcomeScreen;