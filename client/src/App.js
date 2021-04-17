import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/base/base.scss";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import SearchResults from "./pages/searchResults/SearchResults";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

function App() {
  return (
    <Router>
      <main className="App">
        <Header />

        <Switch>
          <Route path="/search-results">
            <SearchResults />
          </Route>
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
      </main>
    </Router>
  );
}

export default App;
