import React, { Component } from "react";
import "../staticstore/style.css";
import "../staticstore/mountains.jpg";
import "../staticstore/s.jpg";
import "../staticstore/topview.jpg";
import "../staticstore/book.png";

export class Header extends Component {
  render() {
    return (
      <div>
        <section id="showcase" class="py-10">
          <div class="primary-overlay text-white">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 text-center">
                  <h1 class="display-2 mt-5 pt-5">So What You Dream Of...</h1>
                  <p class="lead">
                    Loremm ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum, quas.
                  </p>
                  <a
                    href="#"
                    class="btn btn-outline-secondary btn-lg text-white"
                  >
                    <i class="fa fa-arrow-right"></i> Read
                  </a>
                </div>
                <div class="col-lg-6 text-center ">
                  <h2 class=" display-2 mt-5 pt-5 d-none d-lg-block">
                    fkhfksdhkhfsd
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
