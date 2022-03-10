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
function App() {
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
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
