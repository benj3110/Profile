import "./HomePage.module.scss"
import WelcomeScreen from "../welcome/WelcomeScreen";
import styles from "./HomePage.module.scss"
import AboutMe from "../aboutIntro/AboutMe";
import Navbar from "../../components/navbar/Navbar";
import ContactsPage from "../contactsPage/contactsPage";

const HomePage: React.FC = () => {
    return (<div className={styles.PageContainer}>
        <Navbar />
        <div className={styles.PageContent}>
            <WelcomeScreen />
            <AboutMe />
            <ContactsPage />
        </div>
    </div>);
}

export default HomePage;