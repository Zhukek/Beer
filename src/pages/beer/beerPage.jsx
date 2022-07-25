import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBeer } from "../../services/redux/actions/rootActions";

import Loader from "../../components/loader/loader";
import BeerInfo from "../../components/beer-info/beer-info";

const Beerpage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const {isLoading, hasError} = useSelector(store => store)

  useEffect(() => {
    dispatch(getBeer(id))
  },[params])

  if (hasError) {
    return null
  }

  return (
    isLoading ?
    <Loader /> :
    <BeerInfo />
  )
}

export default Beerpage