import React from 'react';
import { connect } from 'react-redux';
import { viewAllBreeds } from '../actions/index';
import CustomDropdown from './CustomDropdown';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';

class WelcomePage extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        breed: '',
      }
  }

  componentDidMount() {
    const { viewAllBreeds } = this.props;
    viewAllBreeds();
  }

  renderBreeds() {
    const breedList = this.props.breeds ? Object.keys(this.props.breeds) : [];
    return breedList.map((breed, index) => (
      <option key={index + 1}>{breed}</option>
    ));
  }

  handleSubmit(a) {
    const { breedSelector } = a.target;
    this.props.history.push(`/breeds/${breedSelector.value}`)
  }

  //<CustomDropdown breeds={this.props.breeds}/>
  render() {
    return (
      <div>
        <Jumbotron>
          <h2>Welcome!</h2>

          <p>Quick-select a breed using the dropdown menu, or click the buttons below to get started.</p>

          <Form inline onSubmit={this.handleSubmit.bind(this)}>
            <Form.Group controlId="breedSelector">
              <Form.Label>Breed Selector:<pre>  </pre></Form.Label>
              <Form.Control as="select">{this.renderBreeds()}</Form.Control>
            </Form.Group>
            {'            '}
            <Button variant="success" type="submit">Go</Button>
          </Form>

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
