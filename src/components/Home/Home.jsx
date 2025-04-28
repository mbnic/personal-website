import styles from './Home.module.css';
import headshot from '../../assets/images/headshot.jpg';

const Home = () => {
    return (
      <section className={styles.home}>
        <div className={styles.intro}>
          <h1>Hello, I am<br></br>Nicolas Milescu-Brahmbhatt</h1>
          <h3>Software Engineer and IT Professional.<br></br>Recent UCF graduate with a Bachelors in Computer Science.</h3>
        </div>
        <div className={styles.headshotContainer}>
          <img className={styles.headshot} src={headshot} alt="Picture of Nic MB"/>
        </div>
      </section>
    );
  };
  
  export default Home;