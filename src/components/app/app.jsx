import { useEffect } from "react";
import styles from './styles.module.css';
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';

import { getPage } from "../../services/redux/actions/rootActions";

import Header from "../header/header";
import MainPage from "../../pages/main/mainPage";
import Beerpage from "../../pages/beer/beerPage";
import Footer from "../footer/footer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPage());
  },[])

  return (
    <section className={styles.root}>
      <Header />
      <div className={styles.main}>
        <Switch>
          <Route path='/' exact={true}>
            <MainPage />
          </Route>
          <Route path='/beers/:id' exact={true}>
            <Beerpage />
          </Route>
          <Route>
            <p className={styles.notFound}>Page not found</p>
          </Route>
        </Switch>
      </div>
      <Footer />
    </section>
  )
}

export default App