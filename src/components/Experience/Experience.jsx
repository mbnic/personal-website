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
import logoFSI from '../../assets/images/fsi-logo.png'



const Experience = () => {
    return (
      <section className={styles.experience}>
          <h1 className={styles.techCaption}>I work with...</h1>
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




        <div className={styles.workExperience}>
          <h1 className={styles.workCaption}>This is some of my experience...</h1>

          <div className={styles.workItem}>
            <div className={styles.role}> 
              <h2>Florida Space Institue</h2>
              <div className={styles.workLogo}>
                <img className={styles.logo}src={logoFSI} alt='FSI Logo' />
              </div>
              <h3>Software Engineer (Capstone)</h3> 
              <p>Robotics & Simulation</p>
            </div>

            <div className={styles.workDescription}>            
              <div className={styles.divider}></div>
              <ul>
                <li>Automated a previously manual control system by developing scalable back-end architecture aligned with industry
                trends in autonomous systems, reducing operational overhead by 60% and increasing rover responsiveness</li>
                <li>Engineered distributed control logic that enabled 5+ autonomous agents to coordinate and complete construction
                tasks—laying the foundation for scalable multi-agent systems</li>
                <li>Developed automation and simulation scripts that reduced multi-agent testing time by 50%, accelerating
                development cycles and debugging</li>
                <li>Collaborated in an Agile development environment, using Git for version control to manage iterative improvements
                across autonomous systems</li>
                <li>Authored detailed technical documentation to support maintainability and accelerate onboarding for future
                development teams</li>
              </ul>
            </div>
          </div>

          <div className={styles.workItem}>
            <div className={styles.role}> 
              <h2>Code Ninjas</h2>
              <div className={styles.workLogo}>
                <img className={styles.logo}src={logoFSI} alt='FSI Logo' />
              </div>
              <h3>Technical Instructor</h3> 
              <p>Programming Languages</p>
            </div>
            <div className={styles.workDescription}>
              <div className={styles.divider}></div>
              <ul>
                  <li>Achieved high student satisfaction while teaching a range of technical skills, including JavaScript, HTML, CSS, Unity, debugging techniques, algorithms, and data structures</li>
                  <li>Led technical onboarding for 25+ new employees, enhancing team capabilities through instruction in algorithms, data structures, and software design patterns.</li>
                  <li>Spearheaded the development and successful rollout of curriculum for Game Development camps, enhancing
                  student engagement through hands-on projects in Unity, Lua, Java, and Scratch</li>
                  <li>Developed and led a Web Development summer camp, introducing students to front-end technologies; over 85%
                  demonstrated mastery of core HTML, CSS, and JavaScript skills.</li>
                  <li>Utilized strong communication and teamwork skills to lead a team of 2–5 members, delivering a consistent and
                  reliable experience for customers and their children</li>
                </ul>
            </div>
          </div>

          <div className={styles.workItem}>
            <div className={styles.role}> 
              <h2>Riggs College of Allied Health</h2>
              <div className={styles.workLogo}>
                <img className={styles.logo}src={logoFSI} alt='FSI Logo' />
              </div>
              <h3>Senior IT Manager</h3>
            </div>
            <div className={styles.workDescription}>
              <div className={styles.divider}></div>
              <ul>
                  <li>Led the administration and optimization of Learning Management Systems (LMS) used by 400+ users, applying
                  systems thinking to ensure scalability, reliability, and user experience</li>
                  <li>Facilitated 25+ technology training sessions for faculty and administrators, contributing to smoother software adoption and improved digital literacy</li>
                  <li>Migrated 1,000+ student and faculty records to a new Student Information System (SIS), involving data
                  transformation, integrity validation, and automation of import/export workflows</li>
                  <li>Managed the Microsoft 365 platform using Azure Active Directory, configuring user access, automating account
                  setups, and maintaining secure authentication protocols — streamlining identity and access management across all user accounts</li>
                  <li>Redesigned key sections of the school website using HTML, CSS, and PHP, improving layout, accessibility, and
                  mobile responsiveness; maintained content updates using a CMS platform</li>
                  <li>Delivered hands-on tech support and implemented scalable IT solutions, consistently reducing incident resolution</li>
                </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;