import React from 'react'
import styles from "./Contact.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerpolicy="no-referrer" />

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
          <h1>Contact Me:</h1>
          <p>Feel free to reach out for collaborations, inquiries, or just to say hello!"</p>
          <div className={styles.iconsStyle}>
          <li><a href="./" className={styles.navList}><i className="fa-brands fa-facebook"></i>Ahmad Hashim Ansari</a></li>
          <li><a href="./" className={styles.navList}><i className="fa-brands fa-linkedin"></i>sumera-hashim-ab444b2a8/</a></li>
          <li><a href="./" className={styles.navList}><i className="fa-brands fa-twitter"></i>sumerahashim</a></li>
          <li><a href="./" className={styles.navList}><i className="fa-brands fa-instagram"></i>Instagram</a></li>
          <li><a href="./" className={styles.navList}><i className="fa fa-briefcase"></i>sumerahashim208@gmail.com</a></li>
            </div>
        </div>
        </div>
  )
}
export default ContactPage
