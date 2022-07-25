import styles from './styles.module.css';

const Loader = () => {

  return (
    <div className={styles.background}>
      <img className={styles.loader} src="https://c.tenor.com/8PSTyxIBxH0AAAAi/clinking-beer-mugs-joypixels.gif" alt="Loading"/>
    </div>
  )
}

export default Loader