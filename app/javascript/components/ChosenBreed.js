import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { viewSubBreeds } from '../actions/index';
import CustomDropdown from './CustomDropdown';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';


class ChosenBreed extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        subBreed: 'All',
      }
  }

  componentDidMount() {
    const { viewSubBreeds } = this.props;
    viewSubBreeds({breed: this.props.match.params.breed});
  } // end componentDidMount

  renderSubBreeds() {
    const subBreedList = this.props.subBreeds ? this.props.subBreeds : [];
    if (subBreedList.length === 0) {
      return <option key={1}>No Sub-breeds</option>
    } else {
      return subBreedList.map((subBreed, index) => (
        <option key={index + 1}>{subBreed}</option>
      ));
    }
  }

  render() {
    const { breed } = this.props.match.params;
    const subBreedsList = this.props.subBreeds ? this.props.subBreeds : [];
    return (
      <div>
        <Breadcrumb>
            <Breadcrumb.Item href="/welcome">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/breeds">All Breeds</Breadcrumb.Item>
            <Breadcrumb.Item active>{breed}</Breadcrumb.Item>
        </Breadcrumb>

        <h2>{breed}</h2>

        <Form inline>
          <Form.Group controlId="subBreedSelector">
            <Form.Label>Sub-breed Selector:<pre>  </pre></Form.Label>
            <Form.Control as="select" onChange={(a) => this.setState({subBreed: a.target.value})}>
              {this.renderSubBreeds()}
            </Form.Control>
          </Form.Group>
        </Form>

        <img src="https://images.dog.ceo/breeds/whippet/n02091134_13244.jpg" />
      </div>
    );
  } // end render

} // end MyFavorites


function mapStateToProps(state) {
  const { subBreeds } = state;
  const { subBreedsList } = subBreeds.items ? subBreeds.items.unshift('All') : [];
  return {
    subBreeds: subBreedsList
  };
} // end mapStateToProps

export default connect(mapStateToProps, {viewSubBreeds})(ChosenBreed);
