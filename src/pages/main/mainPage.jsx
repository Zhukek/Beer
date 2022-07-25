import { useSelector } from "react-redux";

import Loader from "../../components/loader/loader";
import BeersList from "../../components/beers-list/beers-list";

const MainPage = () => {
  const {isLoading, hasError} = useSelector(store => store);

  if(hasError) {
    return null
  }

  return (
    <>
      {isLoading ?
      <Loader /> :
      <BeersList />}
    </>
  )
}

export default MainPage