import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Globalstyle } from './globalStyle';
import Hero from './Components/Hero';
import Products from './Components/Products';
import { productData , productDataTwo ,PizzaData, DessertMenu,Fullmenu} from './Components/Products/data';
import Feature from './Components/feature';
import Footer from './Components/Footer';
import Log from './Components/sign';
import LogIn from './Components/signin';

function App() {
  return (
    <Router>
      <Globalstyle />
      <Route exact path='/'>
        <Hero />
        <Products heading='Choose your favorits' data ={productData}/>
        <Feature />
        <Products heading='Dessert for you' data ={productDataTwo}/>
        <Footer />
      </Route>
      <Route path='/PizzaMenu'>
        <Products heading='Choose your favorits' data={PizzaData} />
      </Route>
      <Route path='/DessertMenue'>
        <Products heading='SOMETHING TO TEMPT YOU...' data ={DessertMenu}/>
      </Route>
      <Route path='/Fullmenu'>
        <Products heading='Full Menu' data ={Fullmenu}/>
      </Route>
      <Route path='/SignUp'>
        <Log />
      </Route>
      <Route path='/login'>
        <LogIn />
      </Route>
    </Router>
  );
}

export default App;
