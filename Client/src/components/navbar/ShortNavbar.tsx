// import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss"
import { Link } from "react-router-dom";
import Contacts from "../contacts/Contacts";
import { Events, scroller, Link as CVLink } from "react-scroll";
import { useEffect, useRef } from "react";
import useScreenWidthSize from "../../hooks/useScreenSize";

const ShortNavbar: React.FC = () => {
    const openCV = () => {
        const pdfUrl = "/BenitoVargheseCV.pdf";
        window.open(pdfUrl, "_blank");
    }
    const screenWidthSize = useScreenWidthSize()
    const isScrollingRef = useRef(false);
    Events.scrollEvent.register('begin', () => {
        isScrollingRef.current = true
    });

    Events.scrollEvent.register('end', () => {
        setTimeout(() => {
            isScrollingRef.current = false;
        }, 500);
    });
    useEffect(() => {
        const sections = ["whoami", "experience", "skills"];
        let touchStartY = 0;
        let touchEndY = 0;

        const getCurrentSectionIndex = () => {
            let currentIndex = 0;

            sections.forEach((sectionId, index) => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    // Check if section is near the top of the viewport
                    if (rect.top >= -100 && rect.top <= window.innerHeight / 2) {
                        currentIndex = index;
                    }
                }
            });

            return currentIndex;
        };

        const navigateSections = (direction: "up" | "down") => {
            let currentSectionIndex = getCurrentSectionIndex();
            if (isScrollingRef.current) return; // Prevent additional input during scrolling

            if (direction === "down") {
                if (currentSectionIndex < sections.length - 1) {
                    currentSectionIndex++;
                }
            } else if (direction === "up") {
                if (currentSectionIndex > 0) {
                    currentSectionIndex--;
                }
            }
            scroller.scrollTo(sections[currentSectionIndex], {
                smooth: "easeInOutCubic",
                offset: (screenWidthSize == "small") && -64
            });
        };

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (isScrollingRef.current) return;

            if (e.deltaY > 0) {
                navigateSections("down");
            } else if (e.deltaY < 0) {
                navigateSections("up");
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            e.preventDefault();
            if (isScrollingRef.current) return;

            if (e.key === "ArrowDown") {
                navigateSections("down");
            } else if (e.key === "ArrowUp") {
                navigateSections("up");
            }
        };
        const handleTouchStart = (e: TouchEvent) => {

            if (isScrollingRef.current) return;

            touchStartY = e.touches[0].clientY; // Record the initial Y position
        };

        const handleTouchEnd = (e: TouchEvent) => {

            if (isScrollingRef.current) return;

            touchEndY = e.changedTouches[0].clientY; // Record the final Y position

            const swipeDistance = touchStartY - touchEndY;

            if (swipeDistance > 20) {
                // Swipe up (scroll down)
                navigateSections("down");
            } else if (swipeDistance < -20) {
                // Swipe down (scroll up)
                navigateSections("up");
            }
        };

        window.addEventListener("touchstart", handleTouchStart, { passive: false });
        window.addEventListener("touchend", handleTouchEnd, { passive: false });

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, []);
    return (
        <>
            {!(screenWidthSize == "small") ? <nav className={styles.Navbar}>
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
            </nav> :
                <nav className={styles.NavbarMobile}>
                    <Contacts />
                    <div className={styles.LinkContainerMobile} >
                        <div className={styles.LinksMobile}>
                            <CVLink
                                activeClass={styles.active}
                                spy={true}
                                smooth={'easeInOutCubic'}
                                to="welcomeScreen" className={styles.Cv}
                                onClick={openCV}>
                                CV
                            </CVLink>
                        </div>
                    </div>
                </nav>}
        </>
    );
}

export default ShortNavbar