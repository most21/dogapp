import { getAllBreeds, getSubBreeds, getSubBreedPictures, getBreedPictures, getAllFavorites, addNewFavorite, deleteFavorite } from '../api/index';

// Dog API action types
export const VIEW_ALL_BREEDS = 'VIEW_ALL_BREEDS';
export const VIEW_SUB_BREEDS = 'VIEW_SUB_BREEDS';
export const VIEW_SUB_BREED_PICTURES = 'VIEW_SUB_BREED_PICTURES';
export const VIEW_BREED_PICTURES = 'VIEW_BREED_PICTURES';

// Favorite action types
export const VIEW_ALL_FAVORITES = 'VIEW_ALL_FAVORITES';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'DELETE_FAVORITE';


// Dog API action creators
export const viewAllBreeds = () => (dispatch) => {
  return getAllBreeds().then(response => dispatch({
    breeds: response.data.message,
    type: VIEW_ALL_BREEDS,
  }));
}
export const viewSubBreeds = (attr) => (dispatch) => {
  return getSubBreeds(attr).then(response => dispatch({
    subBreeds: response.data.message,
    type: VIEW_SUB_BREEDS,
  }));
}
export const viewSubBreedPictures = (attr) => (dispatch) => {
  return getSubBreedPictures(attr).then(response => dispatch({
    breed: attr.breed,
    subBreed: attr.subBreed,
    pictures: response.message,
    type: VIEW_SUB_BREED_PICTURES,
  }));
}
export const viewBreedPictures = (attr) => (dispatch) => {
  console.log('in here');
  return getBreedPictures(attr).then(response => dispatch({
    breed: attr.breed,
    subBreed: null,
    pictures: response.data.message,
    type: VIEW_BREED_PICTURES,
  }));
}

// Favorite API action creators
export const viewAllFavorites = () => (dispatch) => {
  return getAllFavorites().then(response => dispatch({
    favorites: response.data,
    type: VIEW_ALL_FAVORITES,
  }));
}
export const addFavorite = (attr) => (dispatch) => {
  return addNewFavorite(attr).then(response => dispatch({
    favorite: response.data,
    type: ADD_FAVORITE,
  }));
}
export const removeFavorite = (attr) => (dispatch) => {
  return deleteFavorite(attr).then(response => dispatch({
    favorites: response.data,
    type: REMOVE_FAVORITE,
  }));
}
