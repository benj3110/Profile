// import { useEffect, useState } from "react";
import styles from "../../css/Top/Navbar.module.scss"
import { Link } from "react-scroll";
const Navbar: React.FC = () => {

    return (
        <nav className={styles.Navbar}>
            <ul className={styles.LinkContainer}>
                <Link activeClass="active"
                    spy={true}
                    smooth={true}
                    to="profile" className={styles.Links}>
                    Profile
                </Link>
                <Link activeClass="active"
                    spy={true}
                    smooth={true}
                    to="contacts" className={styles.Links}>
                    CONTACTS
                </Link>
                <Link activeClass="active"
                    spy={true}
                    smooth={true}
                    to="profile" className={styles.Links}>
                    CV
                </Link>


            </ul>
        </nav>);
}

export default Navbar