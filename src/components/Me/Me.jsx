import React from "react";
import styles from "./Me.module.css";
import me from "/assets/me/meImage.png";

export const Me = () => {
    return (
    <section className={styles.container}>

        <img src={me} alt="My Profile" className={styles.MeImgss}/>

        <div className={styles.content}> 
            <h1 className={styles.title}>
                Hi, I'm Zeland Klient Quijano
            </h1>
            <p className={styles.description}>
                I'm a full-stack developer with 2 years of experience using React and NodeJs.
                Reach out if you'd like to learn more!
            </p>
            <a href="mailto:zeland.lmedia@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={me} alt="My Profile" className={styles.MeImgbs}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
    </section>
    );
};