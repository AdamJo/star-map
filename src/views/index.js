import { h, Component } from "preact";
import Router from "preact-router";

import Header from "./containers/header";

import Home from "./components/home";
import Map from "./components/map";
import Layout from "./containers/layout";
import Error404 from "./components/errors/404";

// track pages on route change
const onChange = obj => window.ga && ga("send", "pageview", obj.url);

class App extends Component {
  render() {
    return (
      <div class="mapPreReq" >
        <Header/>
          <Map path="/" google={window.google}>
          </Map>
      </div>
    )
  }
}

export default App;
