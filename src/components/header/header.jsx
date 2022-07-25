import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './styles.module.css'
import { searchBeer } from "../../services/redux/actions/rootActions";
import { useDispatch } from "react-redux";
import { ACTIVE_FILTER } from "../../services/redux/actions/rootActions";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname;
  const [inputState, setInputState] = useState('');

  const onChange = e => {
    setInputState(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    const filters = inputState.replace(/\s/g, '_');
    dispatch(searchBeer(filters))
    dispatch({
      type: ACTIVE_FILTER
    })
    setInputState('')
  }

  return (
    <header className={styles.root}>
      <img className={styles.glass} src='https://img.icons8.com/color/344/beer-glass.png' alt='glass' />
      {path === '/' &&
        <form className={styles.form} onSubmit={onSubmit}>
          <fieldset className={styles.fields}>
            <label className={styles.label} htmlFor="beerSearch">What kind of beer do you prefer today?</label>
            <input className={styles.input} id="beerSearch" type="text" value={inputState} onChange={onChange}></input>
          </fieldset>
          <button className={styles.searchButton} type="submit">Search</button>
        </form>
      }
      
      <img className={styles.glass} src='https://img.icons8.com/color/344/beer-glass.png' alt='glass' />
    </header>
  )
}

export default Header