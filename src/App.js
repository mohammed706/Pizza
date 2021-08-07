import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom';
import { Globalstyle } from './globalStyle';
import Hero from './Components/Hero';
import Products from './Components/Products';
import { productData , productDataTwo } from './Components/Products/data';
import Feature from './Components/feature';
function App() {
  return (
    <Router>
      <Globalstyle />
        <Hero />
        <Products heading='Choose your favorits' data ={productData}/>
        <Feature />
        <Products heading='Dessert for you' data ={productDataTwo}/>
    </Router>
  );
}

export default App;
