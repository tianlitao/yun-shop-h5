var React = require('react');

var ReactDOM = require('react-dom')

var Index = require('./src/js/home/index')

var ProductList = require('./src/js/product/product')

import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from 'react-router'


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" coproductmponent={Index}>
      <IndexRoute component={Index}/>
      <Route path="/products" component={ProductList}/>
      <Route path="/product" component={ProductList}/>
      <Route path="/categories" component={ProductList}/>
      <Route path="/cart" component={ProductList}/>
      <Route path="/user" component={ProductList}/>

    </Route>
  </Router>
), document.getElementById('content'));

