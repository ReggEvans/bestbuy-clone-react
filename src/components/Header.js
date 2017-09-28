import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../styles/App.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-top-row">
          <div className="slogan">
            <p>Expert Service. Unbeatable Price.</p>
          </div>
          <div className="upper-nav">
            <p>Weekly Ad</p>
            <p>Deal of the Day</p>
            <p>Credit Cards</p>
            <p>Gift Cards</p>
            <p>Gift Ideas & Registry</p>
          </div>
        </div>
        <div className="header-middle-row">
          <div className="middle-left">
            <div className="logo">
              <img src="images/bestbuy-logo.png" alt="best_buy_logo" height="60"/>
            </div>
            <div className="search">
              <input type="text" className="form-control input-lg" placeholder="Search Best Buy" />
                <span className="input-group-btn">
                    <button className="btn btn-info btn-lg" type="button">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </span>
            </div>
          </div>
          <div className="middle-right">
            <div className="location">
              <i className="fa fa-map" aria-hidden="true"></i>
              <p>Katy Freeway TX <span id="italic">Open till 9pm</span></p>
            </div>
            <div className="cart">
              <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
              <p>Cart</p>
            </div>
          </div>
        </div>
        <div className="header-bottom-row">
          <nav>
            <Link to="/products">PRODUCTS</Link>
            <Link to="/brands">BRANDS</Link>
            <Link to="/deals">DEALS</Link>
            <Link to="/services">SERVICES</Link>
          </nav>
          <div className="history">
            <p>Shopping History</p>
            <p>Order Status</p>
            <p>Saved Items</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
