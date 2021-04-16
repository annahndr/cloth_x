import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/base/base.scss";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <Router>
      <main className="App">
        <Header />

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
      </main>
    </Router>
  );
}

export default App;
