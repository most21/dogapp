import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { viewAllBreeds } from '../actions/index';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


class ListBreeds extends React.Component {

  componentDidMount() {
    const { viewAllBreeds } = this.props;
    viewAllBreeds();
  }

  renderBreeds() {
    const breedList = this.props.breeds ? Object.keys(this.props.breeds) : [];
    return breedList.map((breed, index) => (
      <li key={index}>
        <Link to={`/breeds/${breed}`}>{breed}</Link>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <Breadcrumb>
            <Breadcrumb.Item href="/welcome">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>All Breeds</Breadcrumb.Item>
        </Breadcrumb>

        <h2>All Breeds</h2>
        <img src="https://images.dog.ceo/breeds/terrier-westhighland/n02098286_3462.jpg" />

        <ol>
          {this.renderBreeds()}
        </ol>
      </div>
    );
  } // end render

} // end MyFavorites


function mapStateToProps(state) {
  const { breeds } = state;
  return {
    breeds: breeds.items
  };
} // end mapStateToProps

export default connect(mapStateToProps, {viewAllBreeds})(ListBreeds);
