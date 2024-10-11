import Image from "next/image";
import styles from "./page.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
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
                <li><a href="./about" className={styles.navItem} target="_blank"><i className="fa fa-user"></i>About</a></li>
                <li><a href="./Contact" className={styles.navItem} target="_blank"><i className="fa fa-comments"></i>Contact</a></li>
                <li><a href="./services" className={styles.navItem} target="_blank"><i className="fa fa-list"></i>Services</a></li>        
            </ul>
        </div>        
      <div className={styles.mainContent}>
        <h1>Hello, My name is <span>Sumera Hashim.</span></h1>
        <h2>I'm <span>Web Developer</span></h2>
        <p>I' m a web Developer with extensive experience for over 10 years. My expertise is to create and wesite design, graphic design and many more...This is the main content area where you can add your page content.</p>
      </div>
  </div>
  );
}
