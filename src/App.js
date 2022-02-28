import './App.css';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import TopNav from './components/TopNav';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <TopNav/>
      <Switch>
        <Route path={`/`}>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
