import styles from './Interface.module.css';

const Interface = () => {
  return (
    <main className={styles.container}>
      <div>
        <img src='/Images/Dice.jpg' alt='dice' />
      </div>
      <div className={styles.text_btn}>
        <h1>DICE GAME</h1>
        <button>
          Play Now
        </button>
      </div>
    </main>
  );
};

export default Interface;
