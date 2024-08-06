// import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss"
import { Link } from "react-scroll";
import Contacts from "../contacts/Contacts";
const Navbar: React.FC = () => {
    const openCV = () => {
        const pdfUrl = "/BenitoVargheseCV.pdf";
        window.open(pdfUrl, "_blank");
    }
    // const offsetVh = window.innerHeight / 100;
    //todo active class styling
    return (
        <nav className={styles.Navbar}>
            <ul className={styles.LinksContainer}>
                <div className={styles.LinkContainer} >
                    <Link
                        activeClass={styles.active}
                        spy={true}
                        smooth={true}
                        to="welcomeScreen"
                        className={styles.Links}>
                        Home
                    </Link>
                </div>
                <div className={styles.LinkContainer} >
                    <Link
                        activeClass={styles.active}
                        spy={true}
                        smooth={true}
                        to="profile"
                        className={styles.Links}>
                        About
                    </Link>
                </div>
                <div className={styles.LinkContainer} >
                    <Link
                        activeClass={styles.active}
                        spy={true}
                        smooth={true}
                        to="contacts"
                        className={styles.Links}>
                        Contacts
                    </Link>
                </div>
                <div className={styles.LinkContainer} >
                    <div className={styles.Links}>
                        <Link
                            activeClass={styles.active}
                            spy={true}
                            smooth={true}
                            to="profile" className={styles.Cv}
                            onClick={openCV}>
                            CV
                        </Link>
                    </div>
                </div>
            </ul>
            <Contacts />
        </nav>);
}

export default Navbar