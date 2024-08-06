import "../css/HomePage.module.scss"
import AboutMe from "./Middle/AboutMe";
import WelcomeScreen from "./Top/WelcomeScreen";
import styles from "../css/HomePage.module.scss"

const HomePage: React.FC = () => {
    return (<div className={styles.PageContainer}>
        <WelcomeScreen />
        <AboutMe />
    </div>);
}

export default HomePage;