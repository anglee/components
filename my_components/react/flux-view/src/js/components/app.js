/** @jsx React.DOM */
var React = require('react');
var Catalog = require('../components/app-catalog.js');
var APP =
    React.createClass({
      handleClick: function() {
        AppCatalog.addItem('this is the item');
      },
      render: function() {

        return (<Catalog></Catalog>);
      }
    });

module.exports = APP;