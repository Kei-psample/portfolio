import React from "react";
import email from "/assets/contact/mail.png";
import linkedin from "/assets/contact/linkedin.png";
import git from "/assets/contact/github.png";
import styles from "./Contacts.module.css";

export const  Contact = () => {
    return ( 
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out.</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={email} alt="Email icon"/>
                    <a href="mailto:zeland.lmedia@gmail.com">zeland.lmedia@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={linkedin} alt="Linkedin icon"/>
                    <a href="https://www.linkedin.com/in/zeland-klient-quijano-61a806354/">linkedin.com/in/zeland-klient-quijano</a>
                </li>
                <li className={styles.link}>
                    <img src={git} alt="Github icon"/>
                    <a href="https://github.com/Kei-psample">github.com/zeland-klient-quijano</a>
                </li>
            </ul>
        </footer>
     );
};
 