import React from "react";
import styles from "../Header/Header.module.css";
import logo from "../../assets/IMAGE.svg";
import Button from "../Button";
import CallUs from "../CallUs";
function index() {
  return (
    <React.Fragment>
      <div className="container">
        <nav>
          <div className={styles.navigation}>
            <a href="#home">
              <img src={logo} alt="logo" />
            </a>
            <ul className={styles.nav_title}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#home">About</a>
              </li>
              <li>
                <a href="#home">Services</a>
              </li>
              <li>
                <a href="#home">Pages</a>
              </li>
              <li>
                <a href="#home">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.nav_buttons}>
            <a className={styles.cart} href="#home">
              Cart ( 0 )
            </a>
            <a className={styles.button} href="#home">
              Get a free quote
            </a>
          </div>
        </nav>
      </div>
      <div className={styles.hero}>
        <div className="container ">
          <div className={styles.hero_title}>
            <h1>Quality cleaning for your home</h1>
            <p>
              Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
              aliquet et nulla magna lacus penatibus.
            </p>
            <div className={styles.buttons}>
              <Button />
              <CallUs />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default index;
