import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div class="container-fluid p-0 ">
          <div lc-helper="background" class="container-fluid py-5 mb-4 d-flex justify-content-center" id="hero-container">
            <div class="p-5 mb-4 lc-block col-xxl-7 col-lg-8 col-12" id="hero-contain-div1">
              <div class="lc-block">
                <div editable="rich">
                  <h2 class="fw-bolder display-3 text-white">Custom jumbotron</h2>
                </div>
              </div>
              <div class="lc-block col-md-8">
                <div editable="rich">
                  <p class="lead text-white">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
                  </p>
                </div>
              </div>
              <div class="lc-block">
                <a class="btn btn-dark" href="#" role="button">Click me, I'm a button</a>
              </div>
            </div>
          </div>
 
        <div class="container-fluid">
          <h1 class="text-center p-5 mb-5 bg-dark-subtle"> Main headline </h1>
          
          <div class="w-100 text-break">
            <p >loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
            </p>
            
          </div>
        </div>
        

      </div>
    )
}