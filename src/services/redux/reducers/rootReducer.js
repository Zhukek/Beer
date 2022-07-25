import { GET_REQUEST, GET_PAGE_SUCCESS, GET_ERROR,
  GET_BEER_SUCCESS, SEARCH_BEER_SUCCESS, SET_CURRENT_PAGE, ACTIVE_FILTER } from "../actions/rootActions";

const initState = {
  isLoading: false,
  hasError: false,
  actualBeers: [],
  openedBeer: {},
  currentPage: 1,
  isFilterActive: false, 
  perPage: 24
}

export const rootReducer = (state = initState, action) => {
  switch(action.type) {
    case GET_REQUEST:
      return {
        ...state,
        isLoading: true,
        hasError: false
      }
    case GET_PAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        actualBeers: action.data,
        isFilterActive: false
      }
    case GET_BEER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        openedBeer: action.data[0]
      }
    case SEARCH_BEER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        actualBeers: action.data
      }
    case GET_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
        isFilterActive: false
      }
    case ACTIVE_FILTER:
      return {
        ...state,
        isFilterActive: true
      }
    default:
      return state
  }
}