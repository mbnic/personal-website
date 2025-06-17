import { useState, useRef } from 'react';
import styles from './Contact.module.css';
import useAutosizeTextArea from './useAutosizeTextArea';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [value, setValue] = useState("");
    const textAreaRef = useRef(null)

    useAutosizeTextArea(textAreaRef.current, value);

    const handleChange = (e) => {
      const val = e.target?.value;
      setValue(val);
    };

    const form = useRef();

    const emailConfig = {
      serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    };

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(emailConfig.serviceID, emailConfig.templateID, form.current, {
        publicKey: emailConfig.publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          setValue("")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
      <section className={styles.contact}>
        <div className={styles.heading}>Contact me</div>
        <div className={styles.myEmail}>nicbrahmbhatt@icloud.com</div>

        {/* LINKS */}
        <div className={styles.links}>
          <button className={styles.button}> 
            <FaLinkedin />
          </button>
          <button className={styles.button}>
            <FaGithub />
          </button>
        </div>

        <div className={styles.subheading}>Feel free to contact me with any inquiries or questions!</div>
        
        {/* CONTACT INFO AND MESSAGE*/}
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.contactFields}>
              <label className={styles.contactLabel}>Name:<input className={styles.textboxStyle} type='text' name='user_name' required/></label>
              <label className={styles.contactLabel}>Email:<input className={styles.textboxStyle} type='email' name='user_email' required/></label>
          </div>
          
          <label className={styles.messageLabel}>Message: 
            <textarea 
              rows={1} 
              className={`${styles.textboxStyle} ${styles.messageBox}`} 
              type='text' 
              ref={textAreaRef}
              onChange={handleChange}
              value={value}
              name='message'
              required
              />
          </label>
          <input className={styles.submit} type='submit' value='Send'></input>
        </form>
        
      </section>
    );
  };
  
  export default Contact;