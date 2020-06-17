import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


class MyFavorites extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb>
            <Breadcrumb.Item href="/welcome">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>My Favorites</Breadcrumb.Item>
        </Breadcrumb>

        <h2>My Favorite Pics</h2>
        <img src="https://images.dog.ceo/breeds/terrier-scottish/n02097298_4162.jpg" />
      </div>
    );
  } // end render
  
} // end MyFavorites



export default MyFavorites;
