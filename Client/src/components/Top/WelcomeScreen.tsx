import styles from "../../css/Top/WelcomeScreen.module.scss"
import anime from 'animejs';

const WelcomeScreen: React.FC = () => {
    const animationTarget = document.querySelector(".SpinSemi")
    const spinSemi = () => anime({
        targets: animationTarget,
        translateX: 250,
        easing: 'easeInOutSine'
    })

    return (
        <div className={styles.WelcomeScreenContainer}>
            <section className={styles.Sticky}>
                <div className={styles.Bubbles}>
                    <div className={styles.Bubble}></div>
                    <div className={styles.Bubble}></div>
                    <div className={styles.Bubble}></div>
                    <div className={styles.Bubble}></div>
                    <div className={styles.Bubble}></div>
                    <div className={styles.Bubble}></div>
                    <div className={styles.Bubble}></div>
                    <div className={styles.Bubble}></div>
                    <div className={styles.Bubble}></div>
                    <div className={styles.Bubble}></div>
                </div>
            </section>
            <div className={styles.SpinContainer}>
                <div className={styles.SpinSemi} onClick={spinSemi}>
                    <div className={styles.InnerCircle}></div>
                </div>
                <div className={styles.SpinSemi}>
                    <div className={styles.InnerCircle}></div>
                </div>
                <div className={styles.SpinSemi}>
                    <div className={styles.InnerCircle}></div>
                </div>
                <div className={styles.SpinSemi}>
                    <div className={styles.InnerCircle}></div>
                </div>
            </div>
            <h1 className={styles.Name}>Benito Varghese</h1>
            <p className={styles.Job}>Full-Stack Software Engineer</p>
        </div >);
}

export default WelcomeScreen;