import styles from "../../css/Top/WelcomeScreen.module.scss"

const WelcomeScreen: React.FC = () => {
    return (<div className={styles.WelcomeScreenContainer}>

        <section className={styles.sticky}>
            <div className={styles.bubbles}>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>

            </div>
        </section>

    </div >);
}

export default WelcomeScreen;