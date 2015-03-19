/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-store.js');
var AddToCart = require('./app-addtocart.js');

var Catalog = React.createClass({
  getInitialState: function() {
    return {
      items: AppStore.getCatalog()
    };
  },
  render: function() {
    var rows = this.state.items.map(function(it) {
      return (
          <tr>
              <td>{it.title}</td>
              <td>${it.cost}</td>
              <td><AddToCart item={it}></AddToCart></td>
          </tr>
      )
    });
    return (
        <table className="table table-hover">
        {rows}
        </table>
    );
  }
});

module.exports = Catalog;