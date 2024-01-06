import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./components/Layout"
import Header from "./components/Header"
import Home from "./components/Home"
import NotFound from "./components/NotFound"

import './App.css';
import Products from "./components/pages/Products"
import Contact from "./components/pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element = {<Home/>} />
          <Route path="products" element={<Products/>} />
          <Route path="contact" element={<Contact/>} />

          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
