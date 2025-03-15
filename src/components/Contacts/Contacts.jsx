import React from "react";
import { getImageUrl } from "../../utils";
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
                    <img src={getImageUrl("contact/mail.png")} alt="Email icon"/>
                    <a href="mailto:zeland.lmedia@gmail.com">zeland.lmedia@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedin.png")} alt="Linkedin icon"/>
                    <a href="https://www.linkedin.com/in/zeland-klient-quijano-61a806354/">linkedin.com/in/zeland-klient-quijano</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/github.png")} alt="Github icon"/>
                    <a href="https://github.com/Kei-psample">github.com/zeland-klient-quijano</a>
                </li>
            </ul>
        </footer>
     );
};
 