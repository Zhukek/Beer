import { useSelector } from "react-redux";
import styles from "./styles.module.css";

const BeerInfo = () => {
  const {openedBeer} = useSelector(store => store)
  let pairing
  if (openedBeer.food_pairing) {
    pairing = openedBeer.food_pairing.join(', ')
  }

  return (
    <div className={styles.root}>
      <img className={styles.image} src={openedBeer.image_url} alt='Beer Image'/>
      <p className={styles.description}>{openedBeer.description}</p>
      <p className={styles.name}>{openedBeer.name}</p>
      <span className={styles.abv}>ABV: {openedBeer.abv}%</span>
      <span className={styles.tagline}>{openedBeer.tagline}</span>
      <span className={styles.pairing}>Greate goes together with: {pairing}.</span>
    </div>
  )
}

export default BeerInfo