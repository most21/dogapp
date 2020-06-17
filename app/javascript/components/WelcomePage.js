import React from 'react';
import { connect } from 'react-redux';
import { viewAllBreeds } from '../actions/index';
import CustomDropdown from './CustomDropdown';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

class WelcomePage extends React.Component {

  componentDidMount() {
    const { viewAllBreeds } = this.props;
    viewAllBreeds();
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h2>Welcome!</h2>

          <p>Quick-select a breed using the dropdown menu, or click the buttons below to get started.</p>
          <CustomDropdown breeds={this.props.breeds}/>

          <br/>

          <Button variant="primary" href="/breeds">Browse Breeds</Button>
          {'            '}
          <Button variant="primary" href="/favorites">View My Favorites</Button>
        </Jumbotron>

        <img src="https://images.dog.ceo/breeds/retriever-golden/n02099601_308.jpg"/>
      </div>
    );
  } // end render
} // end WelcomePage

function mapStateToProps(state) {
  const { breeds } = state;
  return {
    breeds: breeds.items
  };
} // end mapStateToProps

export default connect(mapStateToProps, {viewAllBreeds})(WelcomePage);
