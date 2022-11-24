import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ShoppingList></ShoppingList>
        </div>
      </Router>
    );
  }
}

class Item extends React.Component {
  render() {
    return (
      <li className="ListItem">
        <div>
          {this.props.name}
        </div>
        <div>
          {this.props.price} nis
        </div>
        <img src={`/images/${this.props.image}`}></img>
        <Link to="/about">about</Link>
      </li>
    );
  }
}

class ShoppingList extends Component {
  renderItem(name, price, image){
    return <Item name={name} price={price} image={image}></Item>;
  }
  
  render() {
    return(
      <ul className="shoppingList">
        {this.renderItem("Milk", "10", "milk.png")}
        {this.renderItem("Bread", "8", "bread.png")}
        {this.renderItem("Eggs", "12", "eggs.png")}
      </ul>
    )
  }
}

render(<App />, document.getElementById('root'));
