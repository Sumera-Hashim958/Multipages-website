import React from 'react'
import styles from "./service.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactPage = () => {
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
          <h1>Services:</h1>
          <p>Unlock your online potential with my professional web development services. I specialize in creating responsive, user-friendly websites that are tailored to your business needs. From front-end design to back-end functionality, I deliver modern, scalable solutions that enhance user experience and drive results. Let’s build something great together!"</p>
        </div>
        </div>
  )
}
export default ContactPage
