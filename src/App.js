import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import Products from './containers/Products';
import Orders from './containers/Orders';
import PrivateRoute from './components/HOC/PrivateRoute';
import { isUserLoggedIn, getInitialData } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import Category from './containers/Category';
import NewPage from './containers/NewPage';


function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)


  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.authenticate) {
      dispatch(getInitialData());

    }

  }, [auth.authenticate]);


  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/page" component={NewPage} />
        <PrivateRoute path="/category" component={Category} />
        <PrivateRoute path="/products" exact component={Products} />
        <PrivateRoute path="/orders" exact component={Orders} />

        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
