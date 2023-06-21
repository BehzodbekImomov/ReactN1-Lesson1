import React from "react";
import logo from "../../assets/IMAGE.svg";
import styles from "../Footer/Footer.module.css";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={styles.footers}>
          <div className={styles.clear}>
            <h3>Quality cleaning for your home</h3>
            <p>
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </p>
            <img src="/box.svg" alt="rasm" />
          </div>
          <div className={styles.contact_us}>
            <h4>Contact us</h4>
            <p>
1827 Nickel Road, Los Angeles, CA, 90017, United States

(414) 567 - 2109

contact@cleaning.com</p>
          </div>
          <div className={styles.hourse}>
            <h4>Hours</h4>
            <h5>Monday to Friday</h5>
            <p>6:00 AM - 9:00 PM</p>
            <h5>Saturday & Sunday</h5>
            <p>8:00 AM - 8:00 PM</p>
          </div>
          <div className={styles.prise}>
            <h4>Get a free estimate</h4>
            <span>(414) 567 - 2109</span>
            <p>Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
            <button>Request a free quote</button>
          </div>
        </div>
        <div className={styles.ends}>
<img src={logo} alt="" />
<ul className={styles.card}>
  <li><p>Copyright © Cleaning X | Designed by</p></li>
  <li><span>BRIX Templates</span></li>
  <li><p>- Powered by</p></li>
  <li><span>Webflow</span></li>
  <li><span>Licenses</span></li>
</ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
