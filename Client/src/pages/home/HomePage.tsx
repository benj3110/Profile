import "./HomePage.module.scss"
import WelcomeScreen from "../welcome/WelcomeScreen";
import styles from "./HomePage.module.scss"
import AboutMe from "../aboutIntro/AboutMe";
import Navbar from "../../components/navbar/Navbar";
import ContactsPage from "../contactsPage/ContactsPage";

const HomePage: React.FC = () => {
    function updateViewportHeight() {
        const viewportHeight = window.innerHeight;
        document.documentElement.style.setProperty('--viewport-height', `${viewportHeight}px`);
        console.log('Viewport height set to:', viewportHeight); // Debugging log

    }
    document.addEventListener('DOMContentLoaded', updateViewportHeight);
    window.addEventListener('resize', updateViewportHeight);

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