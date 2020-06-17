import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import WelcomePage from './WelcomePage';
import MyFavorites from './MyFavorites';
import ListBreeds from './ListBreeds';
import ChosenBreed from './ChosenBreed';
//import Main from './Main';

//<Route exact path="/all_dogs" component={Main} />

const App = () => (
  <div>
    <Provider store={store}>
      <Header />
      <Switch>
        <Route exact path="/welcome" component={WelcomePage} />
        <Route exact path="/favorites" component={MyFavorites} />
        <Route exact path="/breeds" component={ListBreeds} />
        <Route exact path="/breeds/:breed" component={ChosenBreed} />
      </Switch>
    </Provider>
  </div>
);

export default App;
