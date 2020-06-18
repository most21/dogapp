import { createStore, combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form';
import { VIEW_ALL_BREEDS, VIEW_SUB_BREEDS, VIEW_SUB_BREED_PICTURES, VIEW_BREED_PICTURES, VIEW_ALL_FAVORITES, ADD_FAVORITE, DELETE_FAVORITE } from '../actions/index';


const initialState = {
  breeds: {},
  subBreeds: {},
  pictures: [],
  favorites: [],
  visibleBreed: {
    breed: null,
    subBreed: null,
  },
}


function breeds(state = {}, action) {
  switch (action.type) {
    case VIEW_ALL_BREEDS:
      return {
        ...state,
        items: action.breeds
      }
    default:
      return state
  }
}

function subBreeds(state = {}, action) {
  switch (action.type) {
    case VIEW_SUB_BREEDS:
      return {
        ...state,
        items: action.subBreeds
      }
    default:
      return state
  }
}

function pictures(state = [], action) {
  switch (action.type) {
    case VIEW_BREED_PICTURES:
      return {
        ...state,
        items: action.pictures,
      }
    case VIEW_SUB_BREED_PICTURES:
      return {
        ...state,
        items: action.pictures,
      }
    default:
      return state
  }
}

function favorites(state = [], action) {
  switch (action.type) {
    case VIEW_ALL_FAVORITES:
      return {
        ...state,
        items: action.favorites
      }
    case ADD_FAVORITE:
      return {
        ...state,
        item: action.favorite
      }
    case DELETE_FAVORITE:
      return {
        ...state,
        items: state.items
      }
    default:
      return state
  }
}

function visibleBreed(state = {breed: null, subBreed: null}, action) {
  switch (action.type) {
    case VIEW_BREED_PICTURES:
      return {
        ...state,
        breed: action.breed,
        subBreed: action.subBreed,
        items: action.pictures
      }
    case VIEW_SUB_BREED_PICTURES:
      return {
        ...state,
        breed: action.breed,
        subBreed: action.subBreed,
        items: action.pictures,
      }
    default:
      return state
  }
}

// function rootReducer(state = initialState, action) {
//   return {
//     breeds: breeds(state.breeds, action),
//     favorites: favorites(state.favorites, action),
//     visibleBreed: visibleBreed(state.visibleBreed, action),
//   }
// }

const rootReducer = combineReducers({
  breeds,
  subBreeds,
  pictures,
  favorites,
  visibleBreed,
  //form: formReducer
});

export default rootReducer;
