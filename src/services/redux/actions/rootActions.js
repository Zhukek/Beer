import { getBeerPage, getBeerById, filterBeer } from "../../punkApi";

export const GET_REQUEST = 'CHANGE_PAGE_REQUEST';
export const GET_PAGE_SUCCESS = 'GET_PAGE_SUCCESS';
export const GET_ERROR = 'GET_PAGE_ERROR';
export const GET_BEER_SUCCESS = 'GET_BEER_SUCCESS';
export const SEARCH_BEER_SUCCESS = 'SEARCH_BEER_SUCCESS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const ACTIVE_FILTER = 'ACTIVE_FILTER';

const getFunction = (apiFunction, actionName) => {
  return function(dispatch) {
    dispatch({type: GET_REQUEST});
    apiFunction
      .then((data) => {
        dispatch({
          type: actionName,
          data: data
        })
      })
      .catch(() => {
        dispatch ({type:GET_ERROR})
      })
  }
}

export function getPage (pageNum) {
  return getFunction(getBeerPage(pageNum), GET_PAGE_SUCCESS)
}

export function getBeer (id) {
  return getFunction(getBeerById(id), GET_BEER_SUCCESS)
}

export function searchBeer (filters) {
  return getFunction(filterBeer(filters), SEARCH_BEER_SUCCESS)
}
