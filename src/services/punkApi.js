const url = 'https://api.punkapi.com/v2/';

const checkResponce = (res, message = '') => {
  return res.ok ? res.json() : Promise.reject({
    error: res.status,
    message: message
  })
}

export const getBeerPage = (pageNum = 1) => {
  return fetch(`${url}beers?page=${pageNum}&per_page=24`)
    .then(checkResponce)
}

export const getBeerById = (id) => {
  return fetch(`${url}beers/${id}`)
    .then(checkResponce)
}

export const filterBeer = (filters) => {
  return fetch(`${url}beers?beer_name=${filters}`)
    .then(checkResponce)
}