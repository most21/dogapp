import axios from 'axios';

// Calls to the Dog API
export function getAllBreeds() {
  return axios.get('https://dog.ceo/api/breeds/list/all');
}

export function getBreedPictures(attr) {
  return axios.get(`https://dog.ceo/api/breed/${attr.breed}/images`);
}


// Calls to the Favorite API
export function getAllFavorites() {
  return {}
}

export function addNewFavorite(attr) {
  return {}
}

export function deleteFavorite(attr) {
  return {}
}
