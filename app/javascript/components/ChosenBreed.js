import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { viewSubBreeds, viewBreedPictures } from '../actions/index';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ChosenBreed extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        subBreed: 'All',
      }
  }

  componentDidMount() {
    const { viewSubBreeds, viewBreedPictures } = this.props;
    viewSubBreeds({breed: this.props.match.params.breed});
    viewBreedPictures({breed: this.props.match.params.breed});
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

  renderPictures() {
    const pictureList = this.props.pictures.items ? this.props.pictures.items : [];
    return pictureList.map((picture, index) => (
      <Col>
        <Image src={picture} thumbnail fluid />
      </Col>
    ));
  }

  renderRows() {
    const pictureList = this.renderPictures()
    let pictureGrid = [];
    let row = [];
    const remainder = pictureList.length % 5;
    const stop = pictureList.length - remainder;
    for (let i = 0; i < stop; i++) {
      if (row.length < 5) {
        row.push(pictureList[i]);
      } else {
        pictureGrid.push(row);
        row = [];
      }
    }
    row = []
    for (let j = stop; j < pictureList.length; j++) {
      row.push(pictureList[j])
    }
    pictureGrid.push(row);
    console.log(pictureGrid);
    return pictureGrid.map((row) => (
      <Row>{row}</Row>
    ));
  }

  // <img src="https://images.dog.ceo/breeds/whippet/n02091134_13244.jpg" />
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

        <Container>
          {this.renderRows()}
        </Container>
      </div>
    );
  } // end render

} // end MyFavorites


function mapStateToProps(state) {
  console.log(state);
  const { subBreeds, pictures } = state;
  const pictureList = pictures ? pictures : [];
  let subBreedsList = subBreeds.items ? subBreeds.items : [];
  if (subBreedsList.length !== 0) {
    subBreedsList.unshift('All');
  }
  return {
    subBreeds: subBreedsList,
    pictures: pictureList
  };
} // end mapStateToProps

export default connect(mapStateToProps, {viewSubBreeds, viewBreedPictures})(ChosenBreed);
