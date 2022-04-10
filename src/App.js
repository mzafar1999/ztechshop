import './App.css';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import TopNav from './components/TopNav';
import Home from './Views/Home';
import SingleProductView from './Views/SingleProductView';
import ShopView from './Views/ShopView';
import CartView from './Views/CartView';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/Forms/SignUp';
import SignIn from './components/Forms/SignIn';
import Contact from './components/Forms/Contact';
import { useEffect, useState } from 'react';
import AllProducts from './admin/views/AllProducts';
import AdminFrontend from './admin/AdminFrontend';
import AboutUs from './components/AboutUs';
import { fetchProducts } from './redux/productSlice';
import { useDispatch } from 'react-redux';
function App() {
  
  const [admin, setAdmin] = useState(false)
 

  if(!admin){
    return (
      <Router>
        <TopNav/>
        <Navbar/>
        <Switch>
          <Route exact path={`/`}>
            <Home></Home>
          </Route>
          <Route path={`/product/:id`}>
            <SingleProductView></SingleProductView>
          </Route>
          <Route path={`/shop`}>
            <ShopView></ShopView>
          </Route>
          <Route path={`/cart`}>
            <CartView></CartView>
          </Route>
          <Route path={`/sign-up`}>
            <SignUp></SignUp>
          </Route>
          <Route path={`/sign-in`}>
            <SignIn></SignIn>
          </Route>
          <Route path={`/about-us`}>
            <AboutUs></AboutUs>
          </Route>
          <Route path={`/contact`}>
            <Contact></Contact>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    );
  }
  if(admin){
    return (
      <Router>
        <Switch>
          <Route path={`/all-products`}>
            <AllProducts/>
          </Route>
          <Route path={`/`}>
            <AdminFrontend/>
          </Route>

        </Switch>
      </Router>
    );
  }
}

export default App;
