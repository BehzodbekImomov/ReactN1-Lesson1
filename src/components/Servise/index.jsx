import React from "react";
import Explore from "../Explore";
import styles from "../Servise/Servis.module.css";
import house from "../../assets/house.svg";
import office from "../../assets/office.svg";
import industrial from "../../assets/industrial.svg";
import covid from "../../assets/covid.svg";
import Button from "../Button";
import CallUs from "../CallUs";
function Servise() {
  return (
    <section>
      <div className="container servise">
        <div className={styles.title}>
          <h2>Our Service</h2>
          <Explore />
        </div>
        <ul className={styles.cards}>
          <li>
            <img className={styles.house} src={house} alt="" />
            <h3>House cleaning</h3>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </li>
          <li>
            <img className={styles.office} src={office} alt="" />
            <h3>Office cleaning</h3>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </li>
          <li>
            <img className={styles.industrial} src={industrial} alt="" />
            <h3>Industrial cleaning</h3>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </li>
        </ul>
        <div className={styles.instruction}>
          <img src={covid} alt="logo" />
          <div className={styles.desc}>
            <span>Covid-19 sanitization</span>
            <h2>
              We follow guidelines to keep you safe from the COVID-19 virus
            </h2>
            <p>
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>
            <div className={styles.servise_button}>
              <Button />
              <CallUs />
            </div>
           
          </div>
          
        </div>
        <div className={styles.line}>
              
              </div>
      </div>
    </section>
  );
}

export default Servise;
