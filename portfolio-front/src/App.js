import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Accueil from "./Accueil";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
  <BrowserRouter>
    <Switch>
        <Route exact path="/">
            <Accueil/>
        </Route>
        <Route exact path="/contact">
            <Contact/>
        </Route>
        <Route exact path="/about">
            <About/>
        </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
