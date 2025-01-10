import { useEffect, useState } from "react";
import styles from "./ContactsPage.module.scss"
import useInView from "../../hooks/useInView";
import { useSpring, animated } from '@react-spring/web'
const ContactsPage = () => {
    //todo make contacts reactive
    const [isCopied, setIsCopied] = useState('Copy Email')
    const inView = useInView(0.1); // Trigger when 10% of the element is visible
    const [emailSpring, emailApi] = useSpring(() => ({
        from: { x: 0 },
    }))
    const [linkedSpring, linkedApi] = useSpring(() => ({
        from: { x: 0 },
    }))
    const [githubSpring, githubApi] = useSpring(() => ({
        from: { x: 0 },
    }))
    const windowWidth = window.innerWidth
    useEffect(() => {
        const windowWidthPercent = windowWidth / 100
        if (inView) {
            emailApi.start({
                from: {
                    x: 0,
                },
                to: {
                    x: windowWidthPercent * 10,
                },
                delay: 450,
                config: {
                    friction: 70,
                    tension: 200,
                },
            })
            linkedApi.start({
                from: {
                    x: 0,
                },
                to: {
                    x: windowWidthPercent * 16,
                },
                delay: 450,
                config: {
                    friction: 70,
                    tension: 200,
                },
            })
            githubApi.start({
                from: {
                    x: 0,
                },
                to: {
                    x: windowWidthPercent * 22,
                },
                delay: 450,
                config: {
                    friction: 70,
                    tension: 200,
                },
            })
        } else {
            emailApi.start({
                to: {
                    x: 0,
                },
            })
            linkedApi.start({
                to: {
                    x: 0,
                },
            })
            githubApi.start({
                to: {
                    x: 0,
                },
            })
        }
    }, [inView])
    return (
        <section className={styles.SectionContainer} id="contacts">
            <div className={styles.TitleContainer}>
                <h1 className={styles.Title}>Get in</h1>
                <h1 className={styles.Title}>Touch</h1>
                <div className={styles.TitleUnderLine} />
                <p className={styles.ContactMeTagline}>benitovark@gmail.com</p>
            </div>
            <div className={styles.ImagesContainer}>
                <animated.div className={styles.Image1Container} style={{ ...emailSpring }}>
                    <img
                        className={styles.Image}
                        src="/uniformEmailiconbgless.png"
                        onClick={() => {
                            navigator.clipboard.writeText('benitovark@gmail.com');
                            setIsCopied("Copied!")
                            setTimeout(() => {
                                setIsCopied("Copy Email")
                            }, 3000);
                        }}></img>
                    <div className={styles.Tooltip}>{isCopied}</div>
                </animated.div>
                <animated.div className={styles.Image1Container} style={{ ...linkedSpring }}>
                    <img
                        className={styles.Image}
                        src="/uniformLinkediconbgless.png"
                        onClick={() => window.open("https://www.linkedin.com/in/benito-varghese-1a0451194")}
                    ></img>
                    <div className={styles.Tooltip}>LinkedIn</div>
                </animated.div>
                <animated.div className={styles.Image1Container} style={{ ...githubSpring }}>
                    <img
                        className={styles.Image}
                        src="/uniformGithubiconbgless.png"
                        onClick={() => window.open("https://github.com/benj3110")}
                    ></img>
                    <div className={styles.Tooltip}>Github</div>
                </animated.div>
            </div>
        </section >);
}

export default ContactsPage;