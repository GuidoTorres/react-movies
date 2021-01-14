import "./App.css";
import Inicio from "../src/Container/Inicio";
import Peliculas from "./Container/Peliculas";
import Series from './Container/Series'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import InfoPeli from "./Container/InfoPeli";
import infoSeries from "./Container/InfoSeries";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Inicio} exact />
          <Route path="/peliculas" component={Peliculas} exact />
          <Route path="/series" component={Series} exact />
          <Route path="/infopeli" component={InfoPeli} exact />
          <Route path="/infoserie" component={infoSeries} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
