
import Nav from './components/Nav'
import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Footer from './components/footer'
import Home from './Home';
import ProdInfo from './components/ProdInfo'
import Cart from './components/cart';
import Store from './components/Store';
import PageNotFound from './components/PageNotFound';




function App() {

  
  return (
 
    <Router >
    <>


    <Nav/>
    <Switch>
    
    <Route path="/" exact component={Home}/>
    <Route path="/home/:id" exact render={(props) => <ProdInfo {...props} key={Date.now()}/>}/>
    <Route path="/cart" exact component={Cart}/>
    <Route path='/store' exact render={(props) => <Store {...props} fetchitm="all" key={Date.now()}/>}/>
    <Route path='/iphone' exact render={(props) => <Store {...props} fetchitm="iPhone" key={Date.now()}/>}/>
    <Route path='/ipad' exact render={(props) => <Store {...props} fetchitm="iPad" key={Date.now()}/>}/>
    <Route path='/macbook' exact render={(props) => <Store {...props} fetchitm="mac" key={Date.now()}/>}/>
    <Route path='/accessories' exact render={(props) => <Store {...props} fetchitm="Accessories" key={Date.now()}/>}/>
    <Route path="/404" exact component={PageNotFound}/>
    <Redirect to="/404"/>

    </Switch>
    <Footer/>
    </>
    </Router>
  );
}

export default App;
