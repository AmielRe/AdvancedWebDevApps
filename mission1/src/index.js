import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from './Components/Product';
import './Components/Product.css';
import ShoppingList from './Components/ShoppingList'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='header__image'>
          <img className="header__image" src="./images/siteName.png" alt="Site Main Image" />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<ShoppingList />}></Route>
            <Route path="/product/:product" element={<Product />}>
            </Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));

export default ShoppingList;