import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <div className="header">
        <div className="container-fluid" />
        <div className="container" />
        <div className="container-fluid sticky-top" />
        <div className="container" />
        <div className="d-flex justify-content-end" />
        <div className=" navbar navbar-expand-lg navbar-light bg-light" />

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li classNamae="navbar-nav">
              <a className="nav-item" href="#">
                Home Page
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                What's New?!
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Product Line
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shopping Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                UpComing Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                UpComing Products
              </a>
            </li>
          </ul>
        </div>
      </div>;
  }
}

export default App;
