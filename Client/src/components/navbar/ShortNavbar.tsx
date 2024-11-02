// import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss"
import { Link } from "react-router-dom";
import Contacts from "../contacts/Contacts";

const ShortNavbar: React.FC = () => {
    const openCV = () => {
        const pdfUrl = "/BenitoVargheseCV.pdf";
        window.open(pdfUrl, "_blank");
    }

    return (
        <nav className={styles.Navbar}>
            <ul className={styles.LinksContainer}>
                <div className={styles.LinkContainer} >
                    <Link
                        to="/"
                        className={styles.Links}>
                        Home
                    </Link>
                </div>
                <div className={styles.LinkContainer} >
                    <div className={styles.Links}>
                        <div
                            className={styles.Cv}
                            onClick={openCV}>
                            CV
                        </div>
                    </div>
                </div>
            </ul>
            <Contacts />
        </nav>);
}

export default ShortNavbar