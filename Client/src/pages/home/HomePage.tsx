import "./HomePage.module.scss"
import WelcomeScreen from "../welcome/WelcomeScreen";
import styles from "./HomePage.module.scss"
import AboutMe from "../about/AboutMe";
import Navbar from "../../components/navbar/Navbar";

const HomePage: React.FC = () => {
    return (<div className={styles.PageContainer}>
        <Navbar />
        <div className={styles.PageContent}>
            <WelcomeScreen />
            <AboutMe />
        </div>
    </div>);
}

export default HomePage;