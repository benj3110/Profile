import styles from "../../css/Top/Navbar.module.scss"
import { Link } from "react-scroll";
const Navbar: React.FC = () => {

    return (
        <nav className={styles.Navbar}>
            <ul className={styles.LinkContainer}>
                <li className={styles.Links}>
                    <Link activeClass="active"
                        spy={true}
                        smooth={true}
                        to="profile">
                        PROFILE
                    </Link>
                </li>
                <li className={styles.Links}>
                    <Link activeClass="active"
                        spy={true}
                        smooth={true}
                        to="profile">
                        CV
                    </Link>
                </li>
                <li className={styles.Links}>
                    <Link activeClass="active"
                        spy={true}
                        smooth={true}
                        to="contacts">
                        CONTACTS
                    </Link>
                </li>
            </ul>
        </nav>);
}

export default Navbar