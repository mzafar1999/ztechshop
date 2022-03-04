import './App.css';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import TopNav from './components/TopNav';
import Home from './Views/Home';
import SingleProductView from './Views/SingleProductView';
import ShopView from './Views/ShopView';
import CartView from './Views/CartView';
import './App.css';
function App() {
  return (
    <Router>
      <TopNav/>
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
      </Switch>
    </Router>
  );
}

export default App;
