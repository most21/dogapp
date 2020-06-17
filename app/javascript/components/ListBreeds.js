import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


class ListBreeds extends React.Component {
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
          <li><Link to="/breeds/scottie">Scottish Terrier</Link></li>
          <li>Golden Retriever</li>
          <li>Whippet</li>
        </ol>
      </div>
    );
  } // end render

} // end MyFavorites



export default ListBreeds;
