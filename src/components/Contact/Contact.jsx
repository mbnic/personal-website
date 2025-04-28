import { useState, useRef } from 'react';
import styles from './Contact.module.css';
import useAutosizeTextArea from './useAutosizeTextArea';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const Contact = () => {
    const [value, setValue] = useState("");
    const textAreaRef = useRef(null)

    useAutosizeTextArea(textAreaRef.current, value);

    const handleChange = (e) => {
      const val = e.target?.value;
      setValue(val);
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
        <form>
          <div className={styles.contactFields}>
              <label className={styles.contactLabel}>Name:<input className={styles.textboxStyle} type='text' required/></label>
              <label className={styles.contactLabel}>Email:<input className={styles.textboxStyle} type='text' required/></label>
          </div>
          
          <label className={styles.messageLabel}>Message: 
            <textarea 
              rows={1} 
              className={`${styles.textboxStyle} ${styles.messageBox}`} 
              type='text' 
              ref={textAreaRef}
              onChange={handleChange}
              value={value}
              required
              />
          </label>
          <input className={styles.submit} type='submit' value='Submit'></input>
        </form>
        
      </section>
    );
  };
  
  export default Contact;