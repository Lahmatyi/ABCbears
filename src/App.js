import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CollectionsPage from "./components/CollectionsPage";
import AdminWrapper from "./components/AdminWrapper";
import './App.css';

const Home = () =>(
  <div>
    <div>Home</div>
    <Link to="/admin">Admin</Link>
  </div>
)

const Admin = () =>(
  <AdminWrapper>
    <div>Admin</div>
    <Link to="/admin/collections">Collections</Link>
    <Link to="/admin/works">Works</Link>
  </AdminWrapper>
)

const Works = () => (
  <div>
    <h2>Works</h2>
  </div>
)

const Orders = () => (
  <div>
    <h2>Orders</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>          
          <Route exact path="/" component={Home}/>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/admin/collections" component={CollectionsPage}/>
          <Route exact path="/admin/works" component={Works}/>
          <Route exact path="/admin/orders" component={Orders}/>
        </div>
      </Router>
    );
  }
}

export default App;
