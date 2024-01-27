import "../css/HomePage.module.scss"
import AboutMe from "./Middle/AboutMe";
import Contacts from "./Middle/Contacts";
import Navbar from "./Top/Navbar";
import ProfilePic from "./Top/ProfilePic";
import styles from "../css/HomePage.module.scss"

const HomePage: React.FC = () => {
    return (<div className={styles.PageContainer}>
        <ProfilePic />
        <Navbar />
        <AboutMe />
        <Contacts />
    </div>);
}

export default HomePage;