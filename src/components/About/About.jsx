import React from "react";
import styles from "./About.module.css";
import aboutImg from "/assets/About/aboutImage.png";
import cursorImg from "/assets/About/cursorImage.png";
import serverImg from "/assets/About/serverImage.png";
import uiImg from "/assets/About/uiImage.png";

export const About = () => {
    return (
        
        <section className={styles.container} id="about"> 

            <ul className={styles.aboutItems}>

            <h2 className={styles.title}>About</h2>
                
                <li className={styles.aboutItem}>
                    <img src={cursorImg} alt="Cursor Image"/>
                    <div className={styles.aboutItemText}> 
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm a frontend developer 
                            with experience in building responsive 
                            and optimized sites.
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={serverImg} alt="Server Image"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I have experience developing 
                            backend systems and APIs.
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={uiImg} alt="UI Image"/>
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>
                            I have designed multiple landing pages 
                            and have created design system as well.
                        </p>
                    </div>
                </li>

            </ul>

            <div>
                <img src={aboutImg} 
                className={styles.aboutImage}
                />
            </div>
            
        </section>
    );
};