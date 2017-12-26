import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

let IndexPage = () => <div>Заставка</div>;
let ShopPage = () => <div>Магазин</div>;

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <div>
                    <NavLink to="/index">Заставка</NavLink>
                    <NavLink to="/shop">Магазин</NavLink>
                </div>
                <div>
                    <Route path="/index" component={IndexPage} />
                    <Route path="/shop" component={ShopPage} />
                </div>
            </div>
        </Router>
    );
  }
}



export default App;
