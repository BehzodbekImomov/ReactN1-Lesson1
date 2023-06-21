import React from 'react'
import styles from "../Contact/Contact.module.css"
import CallUs from '../CallUs'

function Contact() {
  return (
    <section className={styles.section}>
        <div id={styles.contact}  className="container">
            <div className={styles.title}>
              <h2>Contact Us</h2>
              <p>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
             <CallUs/>
             <div className={styles.line}></div>
             <h3>Not convinced yet?</h3>
             <p>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
             <a className={styles.contact_button} href="#home">Browse our packages</a>
            </div>








            <form  className={styles.form}>
              <div className={styles.information}>
                <label htmlFor="">Full name</label>
                <input type="text" />
              </div> 
              
              <div className={styles.information}>
                <label htmlFor="">Phone number</label>
                <input type="number" />
              </div> 
              
              <div className={styles.information}>
                <label htmlFor="">Address</label>
                <input type="text" />
              </div>
              
               <div className={styles.information}>
                <label htmlFor="">Email</label>
                <input type="email" />
              </div>
              
               <div className={styles.information}>
                <label htmlFor="">Requested service</label>
                <input type="text" />
              </div> 
              
               <div className={styles.information}>
                <label htmlFor="">Day of service</label>
                <input type="text" />
              </div>
               <div className={styles.informationAdd}>
                <label htmlFor="">Add a note</label>
                <input type="text" />
              </div>
              <button className={styles.form_button}>Submit message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact