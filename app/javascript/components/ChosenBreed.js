import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


class ChosenBreed extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Breadcrumb>
            <Breadcrumb.Item href="/welcome">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/breeds">All Breeds</Breadcrumb.Item>
            <Breadcrumb.Item active>{this.props.match.params.breed}</Breadcrumb.Item>
        </Breadcrumb>

        <h2>{this.props.match.params.breed}</h2>
        <img src="https://images.dog.ceo/breeds/whippet/n02091134_13244.jpg" />
      </div>
    );
  } // end render

} // end MyFavorites



export default ChosenBreed;
