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
import Footer from "./components/footer/Footer";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

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
        <Footer />
    </div>
    </Router>
  );
}

export default App;
