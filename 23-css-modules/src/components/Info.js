import './Info.css';
import styles from './Info.module.css';

console.log(styles);

const Info = () => {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <h2>Heading in the Info component</h2>
      <button className="my-button">Click me in the Info component</button>
      <br></br>
      <button className={styles.myOtherButtuon}>
        Button with local css styles
      </button>
    </div>
  );
};

export default Info;
