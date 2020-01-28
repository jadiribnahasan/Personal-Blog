import React, { Component } from "react";
//import '../components/staticstore/style.css'
import "../staticstore/style.css";
import "../staticstore/angkon.png";
import "../staticstore/flaglogo.png";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-light fixed-top py-2">
          <div class="container">
            <img
              src="../static/frontend/img/angkon.png"
              width="200"
              height="80"
              alt=""
            ></img>
            <h3 class="d-inline align-right"></h3>
            <button
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a href="#home" class="nav-link">
                    Homegg
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#about" class="nav-link">
                    Abouteee
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#authors" class="nav-link">
                    Meet The Authors
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#contact" class="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
