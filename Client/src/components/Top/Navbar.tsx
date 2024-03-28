// import { useEffect, useState } from "react";
import styles from "../../css/Top/Navbar.module.scss"
import { Link } from "react-scroll";
const Navbar: React.FC = () => {
    const openCV = () => {
        const pdfUrl = "/BenitoVargheseCV.pdf";
        window.open(pdfUrl, "_blank");
    }
    const offsetVh = window.innerHeight / 100;
    //todo active class styling
    return (
        <nav className={styles.Navbar}>
            <ul className={styles.LinkContainer}>
                <div className={styles.MainLinks}>
                    <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        to="profile"
                        offset={-(7 * offsetVh)}
                        className={styles.Links}>
                        Profile
                    </Link>
                    <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-(7 * offsetVh)}
                        to="projects"
                        className={styles.Links}>
                        Projects
                    </Link>
                    <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-(7 * offsetVh)}
                        to="contacts"
                        className={styles.Links}>
                        Contacts
                    </Link>

                </div>
                <div className={styles.Cv}>
                    <Link activeClass="active"
                        spy={true}
                        smooth={true}
                        to="profile" className={styles.Links}
                        onClick={openCV}>
                        CV
                    </Link>
                </div>
            </ul>
        </nav>);
}

export default Navbar