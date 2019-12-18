import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Restaurantlist from './restaurantlist'
import RestaurantDetails from './RestaurantDetails'
import CreateRestaurant from './CreateRestaurant';
import UpdateRestaurant from './UpdateRestaurant';
function App() {
  return (
    <div className="App">
      <Router>
      {/* <Restaurantlist /> */}

      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resto">Restaurants</Link>
            </li>
            <li>
              <Link to="/details">Restaurant Details</Link>
            </li>
            <li>
              <Link to="/create">Create Restaurant</Link>
            </li>
            <li>
              <Link to="/update">Update Restaurant</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/resto">
            <Restaurantlist />
          </Route>
          <Route path="/details/:id" render={(props) => <RestaurantDetails {...props} />}>
          </Route>
          <Route path="/create">
            <CreateRestaurant />
          </Route>
          <Route path="/update">
        <UpdateRestaurant />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
        </Router>
    </div>
  
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
