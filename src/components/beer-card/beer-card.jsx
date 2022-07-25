import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const BeerCard = ({beer}) => {
  const description = beer.description.length < 140 ? 
    beer.description :
    beer.description.slice(0,140) + '...';

  return (
    <li className={styles.card}>
      <Link className={styles.link} to={`/beers/${beer.id}`}>
        <img className={styles.image} src={beer.image_url} alt='Beer Image'/>
        <p className={styles.description}>{description}</p>
        <p className={styles.name}>{beer.name}</p>
      </Link>
    </li>
  )
}

export default BeerCard