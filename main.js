var React = require('react');

var ReactDOM = require('react-dom')

var Index = require('./src/js/view/index')

var SupplierProduct = require('./src/js/view/supplier_products')

var ProductShow = require('./src/js/view/product')

var Categories = require('./src/js/view/categories')

var Cart = require('./src/js/view/cart')

var User = require('./src/js/view/user')

import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from 'react-router'


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Index}/>
      <Route path="/supplier/:code" component={SupplierProduct}/>
      <Route path="/products/:id" component={ProductShow}/>
      <Route path="/product" component={SupplierProduct}/>
      <Route path="/categories" component={Categories}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/user" component={User}/>

    </Route>
  </Router>
), document.getElementById('content'));

