import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import WelcomePage from './WelcomePage';
import MyFavorites from './MyFavorites';
import ListBreeds from './ListBreeds';
import ChosenBreed from './ChosenBreed';
//import Main from './Main';
//import ChosenBreed from './ChosenBreed';

//<Route exact path="/all_dogs" component={Main} />
//<Route exact path="/all_dogs/:breed" component={ChosenBreed} />

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/welcome" component={WelcomePage} />
      <Route exact path="/favorites" component={MyFavorites} />
      <Route exact path="/breeds" component={ListBreeds} />
      <Route exact path="/breeds/:breed" component={ChosenBreed} />
    </Switch>
  </div>
);

export default App;
