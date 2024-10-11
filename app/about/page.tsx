import React from 'react'
import styles from "./about.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <a href="#"><span>S</span>H</a>
            </div>
            <div className="nav-toggler">
                <span></span>
            </div>
            <ul className={styles.nav}>
                <li><a href="./" className={styles.navItem}><i className="fa fa-home"></i>Home</a></li>
                <li><a href="./about" className={styles.navItem}><i className="fa fa-user"></i>About</a></li>
                <li><a href="./Contact" className={styles.navItem}><i className="fa fa-comments"></i>Contact</a></li>
                <li><a href="./services" className={styles.navItem}><i className="fa fa-list"></i>Services</a></li>        
            </ul>
        </div>
        <div className={styles.mainContent}>
          <h1>About Me:</h1>
          <p>My goal is to continue improving my skills and to work on projects that make a meaningful impact. 
                    I'm always eager to take on new challenges and collaborate with others to create 
                    innovative solutions.</p>
          
          <div className={styles.personalInfo}>
            <h1>Info</h1>
            <p>Birthday: <span>20-12-1990</span></p>
            <p>Age: <span>30</span></p>
            <p>Email: <span>sumerahashim208@gmail.com</span></p>
            <p>Contact: <span>03093671527</span></p>
            <p>Degree: <span>MA in Islamiat</span></p>
            <p>City: <span>Karachi</span></p>
          </div>
          <div className={styles.skills}>
            <h1>Skills</h1>
            <p>Typescript</p>
            <p>Javascript</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Next.js</p>
            <p>React</p>
          </div> 
          </div> 
          </div> 

  )
}
export default AboutPage
