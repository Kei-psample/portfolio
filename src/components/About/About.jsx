import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        
        <section className={styles.container} id="about"> 

            <ul className={styles.aboutItems}>

            <h2 className={styles.title}>About</h2>
                
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorImage.png")} alt="Cursor Image"/>
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
                    <img src={getImageUrl("about/serverImage.png")} alt="Server Image"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I have experience developing 
                            backend systems and APIs.
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiImage.png")} alt="UI Image"/>
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
                <img src={getImageUrl("about/aboutImage.png")} 
                className={styles.aboutImage}
                />
            </div>
            
        </section>
    );
};