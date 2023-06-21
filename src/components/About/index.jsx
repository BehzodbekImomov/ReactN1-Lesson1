import React from 'react'
import styles from "../About/About.module.css"
import Button from '../Button'
import Explore from '../Explore'
import pay from '../../assets/pay.svg'
import cleaned from '../../assets/cleaned.svg'
import schedula from '../../assets/schedula.svg'


function About() {
  return (
    <section>
      <div className="container about">
        <h2 className={styles.h2}>About Us</h2>
        <p className={styles.title}>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed <br /> neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
        <ul className={styles.cards}>
          <li className={styles.li}>
            <img src={schedula} alt="logo" />
            <h3>1. Schedule online</h3>
            <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
          </li> 
          <li className={styles.li}>
            <img src={pay}alt="logo" />
            <h3>2. Pay online easily</h3>
            <p>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
          </li>
           <li className={styles.li}>
            <img src={cleaned} alt="logo" />
            <h3>3. Get your house cleaned</h3>
            <p>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
          </li>
        </ul>
        <div className={styles.cliced}>
        <Button/>
      <Explore/>
      </div>
      <div className={styles.line}></div>
      </div>
    </section>
  )
}

export default About
