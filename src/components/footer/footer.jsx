import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPage, SET_CURRENT_PAGE } from '../../services/redux/actions/rootActions';

const Footer = () => {
  const dispatch = useDispatch();
  const { currentPage, isFilterActive, actualBeers, perPage } = useSelector(store => store)
  const location = useLocation();
  const path = location.pathname;
  const resetFilter = () => {
    dispatch(getPage(currentPage))
  }
  const changePage = (page) => {
    dispatch(getPage(page));
    dispatch({
      type: SET_CURRENT_PAGE,
      page: page
    })
  }
  const prevPage = () => {
    changePage(currentPage - 1)
  }
  const nextPage = () => {
    changePage(currentPage + 1)
  }

  return (
    <footer className={styles.root}>
      {path === '/' ?
        ( isFilterActive ? 
          <button onClick={resetFilter} className={styles.button}>Reset filter</button>
          :
          <div className={styles.counter}>
            {currentPage > 1 && 
              <button onClick={prevPage} className={styles.button}>{currentPage - 1}</button>
            }
            <span className={styles.currentPage}>{currentPage}</span>
            {actualBeers.length === perPage &&
              <button onClick={nextPage} className={styles.button}>{currentPage + 1}</button>
            }
          </div>
        )
        :
        <Link to='/' className={styles.link}>
          Main page
        </Link>
      }
    </footer>
  )
}

export default Footer