import React from "react";
import { Link } from "react-router-dom";

export default function Contact(){
    return(
        <>
        <div class="container ">
           <form >
                <div class="form-group mt-3 mb-3">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Name *" required/>
                </div>
                <div class="form-group mb-3">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email address" required/>
                </div>
                <div class="form-group mb-3">
                    <label for="subject">Name</label>
                    <input type="text" class="form-control" id="subject" aria-describedby="emailHelp" placeholder="Subject"/>
                </div>
                <div class="form-group mb-3">
                    <label for="message">Message</label>
                    <input type="text" class="form-control" id="message" aria-describedby="emailHelp" placeholder="Message *" required/>
                </div>

                <button type="submit" class="btn btn-primary btn-lg">Send Message </button>
            </form>


        </div>

        <div class="w-100 text-break">
            <button type='button' class="btn mb-5 btn-primary "><a href="mailto:savin992@gmail.com" class="text-decoration-none text-white">Contact us</a></button> 
        
        </div>
            
        
        </>
    )
}


        