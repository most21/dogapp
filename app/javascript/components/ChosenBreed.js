import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { viewSubBreeds } from '../actions/index';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


class ChosenBreed extends React.Component {
  componentDidMount() {
    const { viewSubBreeds } = this.props;
    viewSubBreeds({breed: this.props.match.params.breed});
  } // end componentDidMount

  render() {
    console.log(this.props);
    const { breed } = this.props.match.params;
    return (
      <div>
        <Breadcrumb>
            <Breadcrumb.Item href="/welcome">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/breeds">All Breeds</Breadcrumb.Item>
            <Breadcrumb.Item active>{breed}</Breadcrumb.Item>
        </Breadcrumb>

        <h2>{breed}</h2>
        <img src="https://images.dog.ceo/breeds/whippet/n02091134_13244.jpg" />
      </div>
    );
  } // end render

} // end MyFavorites


function mapStateToProps(state) {
  const { subBreeds } = state;
  return {
    subBreeds: subBreeds.items
  };
} // end mapStateToProps

export default connect(mapStateToProps, {viewSubBreeds})(ChosenBreed);
