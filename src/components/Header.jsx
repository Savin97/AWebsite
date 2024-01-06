import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Analytica_logo.png"

export default function Header(){
    return(
        <div class="container-fluid p-0">
       {/* navbar */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light h-25">
          <Link to="/"><img class="img-fluid navbar-brand" style={{maxHeight: 100 + "px"}} src={logo} /></Link>
          
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav fs-4 " id="navbar-content">
              <li class="nav-item">
                <Link class="nav-link" to="products">Products</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="suppliers">Suppliers</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="seminars">Seminars</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="contact">Contact us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="about">About</Link>
              </li>
              
              {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li> */}
              
            </ul>
            
          </div>
        </nav>
    </div>
    )
}