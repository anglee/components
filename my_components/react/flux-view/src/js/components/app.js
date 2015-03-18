/** @jsx React.DOM */
var React = require('react');
var Catalog = require('../components/app-catalog.js');
var Cart = require('../components/app-cart.js');
var APP =
    React.createClass({
      handleClick: function() {
        AppCatalog.addItem('this is the item');
      },
      render: function() {

        return (
          <div>
            <h1>Store</h1>
            <Catalog></Catalog>
            <h1>Shopping Cart</h1>
            <Cart></Cart>
          </div>
        );
      }
    });

module.exports = APP;