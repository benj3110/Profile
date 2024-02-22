// import { useEffect, useState } from "react";
import styles from "../../css/Top/Navbar.module.scss"
import { Link } from "react-scroll";
const Navbar: React.FC = () => {
    // const [scrollWidth, setScrollWidth] = useState<number>(0);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    //         const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;
    //         setScrollWidth(scrolledPercentage);
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <nav className={styles.Navbar}>
            {/* <div className={styles.ProgressBar} style={{ width: `${scrollWidth}%` }}></div> */}
            <ul className={styles.LinkContainer}>
                <Link activeClass="active"
                    spy={true}
                    smooth={true}
                    to="profile" className={styles.Links}>
                    PROFILE
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