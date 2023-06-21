import React from 'react'
import styles from "../Articles/Articlec.module.css"
import Button from '../Button'
function Articles() {
  return (
   <section>
    <div className="container">
      <div className={styles.articles}>
        <div className={styles.desc}>
<h2>Articles & resources</h2>
<p>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
        </div>
        
        <div className={styles.articles_button}>
      <Button/> 
      <a className={styles.browse} href="#home">Browse articles</a>
        </div>
        </div>
        <ul className={styles.cards}>
           <li>
            <img src="/plisos.svg" alt="" />
            <div className={styles.card_desc}>
              <h4>8 best vacuum cleaners to clean any mess for your home in 2022</h4>
              <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
              <div className={styles.desc_img}>
                <span>Jan 28, 2022</span>
                <div className={styles.box}></div>
              </div>
            </div>
           </li>
            <li>
            <img src="/cleaner.svg" alt="" />
            <div className={styles.card_desc}>
              <h4>How to properly disinfect your phone and other electronics</h4>
              <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
              <div className={styles.desc_img}>
                <span>Feb 1, 2022</span>
                <div className={styles.box}></div>
              </div>
            </div>
           </li>
        </ul>
    </div>
   </section>
  )
}

export default Articles