import styles from './Experience.module.css'
import logoHTML from '../../assets/images/html-logo.png'
import logoCSS from '../../assets/images/css-logo.png'
import logoPython from '../../assets/images/python-logo.png'
import logoJavascript from '../../assets/images/js-logo.png'
import logoJava from '../../assets/images/java-logo.png'
import logoC from '../../assets/images/c-logo.png'
import logoROS from '../../assets/images/ros-logo.png'
import logoSQL from '../../assets/images/sql-logo.png'
import logoMongoDB from '../../assets/images/mongodb-logo.png'
import logoFigma from '../../assets/images/figma-logo.png'
import logoReact from '../../assets/images/react-logo.png'
import logoNodeJS from '../../assets/images/nodejs-logo.png'

import { Carousel } from '../Carousel/Carousel'
import { slides } from '../Carousel/carouselData.json'


const Experience = () => {
  

  return (
      <section className={styles.experience}>
        <h1 className={styles.expCaption}>I work with...</h1>
        <div className={styles.techSkills}>
           
            <div className={styles.techItem}>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src={logoHTML} alt='HTML logo' />
              </div>
              <h3 className={styles.logoCaption}>HTML</h3>
            </div>
           
            <div className={styles.techItem}>
              <div className={styles.logoContainer}>
                <img className={styles.logoLarge} src={logoCSS} alt='CSS logo' />
              </div>
              <h3 className={styles.logoCaption}>CSS</h3>
            </div>
            
            <div className={styles.techItem}>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src={logoPython} alt='Python logo' />
              </div>
              <h3 className={styles.logoCaption}>Python</h3>
            </div>
            
            <div className={styles.techItem}>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src={logoJavascript} alt='Javascript logo' />
              </div>
              <h3 className={styles.logoCaption}>JavaScript</h3>
            </div>
           
            <div className={styles.techItem}>
              <div className={styles.logoContainer}>
                  <img className={styles.logo} src={logoJava} alt='Java logo' />
              </div>
              <h3 className={styles.logoCaption}>Java</h3>
            </div>
        
            <div className={styles.techItem}>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src={logoC} alt='C logo' />
              </div>
              <h3 className={styles.logoCaption}>C/C++</h3>
            </div>
         
            <div className={styles.techItem}>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src={logoROS} alt='ROS logo' />
              </div>
              <h3 className={styles.logoCaption}>ROS2</h3>
            </div>
        
            <div className={styles.techItem}>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src={logoSQL} alt='SQL logo' />
              </div>
              <h3 className={styles.logoCaption}>SQL</h3>
            </div>
         
            <div className={styles.techItem}>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src={logoMongoDB} alt='MongoDB logo' />
              </div>
              <h3 className={styles.logoCaption}>MongoDB</h3>
            </div>
          
            <div className={styles.techItem}>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src={logoFigma} alt='Figma logo' />
              </div>
              <h3 className={styles.logoCaption}>Figma</h3>
            </div>
           
            <div className={styles.techItem}>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src={logoReact} alt='React logo' />
              </div>
              <h3 className={styles.logoCaption}>React</h3>
            </div>
           
            <div className={styles.techItem}>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src={logoNodeJS} alt='Node JS logo' />
              </div>
              <h3 className={styles.logoCaption}>NodeJS</h3>
            </div>
        </div>

        <h1 className={styles.expCaption}>Where I've worked...</h1>
        <Carousel data={slides}/>

        







      </section>
    );
  };
  
  export default Experience;