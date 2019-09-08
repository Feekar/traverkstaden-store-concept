import React from 'react';
import styles from './contact.module.scss';

const Contact = () => (
  <section id="contact" className={styles.contact}>
    <h4>Kontakt</h4>
    <div className={styles.contactInfo}>
      <a href="mailto:mickegu@telia.se">mickegu@telia.com</a>
      <a href="https://www.instagram.com/gardslotensnickeri/">Instagram</a>
    </div>
  </section>
);

export default Contact;
