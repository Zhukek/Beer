import { useSelector } from "react-redux";

import styles from './styles.module.css';
import BeerCard from "../beer-card/beer-card";

const BeersList = () => {
  const {actualBeers} = useSelector(store => store);
  return(
    <ul className={styles.beerList}>
      {actualBeers.map(beer => 
        <BeerCard key={beer.id} beer={beer} />
      )}
    </ul>
  )
}

export default BeersList