import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Product from './Product';
import './product.css';
import dataProducts from './data.json';



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

class Item extends React.Component {
  render() {
    return (
      <li className="ListItem">
        <div className="ListItem__name">
          {this.props.name}
        </div>
        <div className="ListItem__price">
          {this.props.price} nis
        </div>
        <img className="ListItem__img" src={`/images/${this.props.image}`} alt="prodImage"></img>
        <Link to={`/product/${this.props.name}`}>about</Link>
      </li>
    );
  }
}

class ShoppingList extends Component {
  renderItem(name, price, image) {
    return <Item name={name} price={price} image={image}></Item>;
  }

  render() {
    return (
      <div>
        {
          dataProducts.map(prod => {
            return (
              <div key={prod.Id}>
                <ul className="shoppingList">
                  {this.renderItem(prod.Name, prod.Price, prod.Image1)}
                </ul>
              </div>
            )
          })
        }
      </div>
      /*<ul className="shoppingList">
        {this.renderItem("Milk", "10", "milk.png", "Tnuva", "milk2.png", "Fresh milk every day !")}
        {this.renderItem("Bread", "8", "bread.png", "Berman Bakery", "bread2.png", "Most delicious bread !")}
        {this.renderItem("Eggs", "12", "eggs.png", "Haim's Eggs", "eggs2.png", "Eggs straight from the hen house")}
        {this.renderItem("Cornflakes", "22", "cornflakes.png", "Telma", "cornflakes2.png", "That's the right way to open the day !")}
        {this.renderItem("Cola", "6", "cola.png", "Coca-Cola", "cola2.png", "Best flavour drink")}
        {this.renderItem("Tomato", "3", "tomato.png", "Zinger Vegetables", "tomato2.png", "Fresh red juicy tomato's")}
        {this.renderItem("Cucumber", "2", "cucumber.png", "Zinger Vegetables", "cucumber2.png", "Best organic cucumber")}
        {this.renderItem("Olives", "15", "olives.png", "Zeita", "olives2.png", "Original syrian olives")}
      </ul>*/
    )
  }
}

render(<App />, document.getElementById('root'));

export default ShoppingList;
