import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './styles/base/base.scss';
import Header from './components/header/Header';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>

      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
