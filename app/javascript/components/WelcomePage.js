import React from 'react';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const WelcomePage = () => (
  <div>
    <Breadcrumb>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
    </Breadcrumb>

    <h2>Welcome!</h2>
    <img src="https://images.dog.ceo/breeds/retriever-golden/n02099601_308.jpg"/>

    <Button variant="primary" href="/breeds">Browse Breeds</Button>
    <Button variant="primary" href="/favorites">View My Favorites</Button>
  </div>
);

export default WelcomePage;
