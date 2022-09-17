import React, { useContext, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { auth } from './fireBase';
import { StateContext } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Payment from './Payment';
import Orders from './Orders';


const promise = loadStripe('pk_test_51LMaseCEjL8nKCOGHTPM47nBtYNmMFQPZG7xqFNzbXSr0WLLS4WanNzpimXuA2KMtu8O26GAnhbUQ5zPhE1kL2Sx00Ed2MrSOX')

function App() {

  const { state, dispatch } = useContext(StateContext);

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('User is: ', authUser);

      if(authUser){
        //user just/was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;

