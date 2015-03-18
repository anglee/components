/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-store.js');
var RemoveFromCart = require("../components/app-removefromcart.js");
var Increase = require("../components/app-increase.js");
var Decrease = require("../components/app-decrease.js");

var getCartItems = function() {
  return {
    items: AppStore.getCart()
  };
};

var Cart = React.createClass({
  getInitialState: function() {
    return getCartItems();
  },
  componentWillMount: function() {
    AppStore.addChangeListener(this._onChange)
  },
  _onChange: function() {
    console.log("change", arguments);
    this.setState(getCartItems());
  },
  render: function() {
    console.log(this.state.items);
    var total = 0;
    var items = this.state.items.map(function(item, i){
      var subtotal = item.cost*item.qty;
      total+=subtotal;
      return (
          <tr key={i}>
            <td><RemoveFromCart index={i} /></td>
            <td>{item.title}</td>
            <td>{item.qty}</td>
            <td>
              <Increase index={i} />
              <Decrease index={i} />
            </td>
            <td>${subtotal}</td>
          </tr>
      )
    })
    return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th>Qty</th>
              <th></th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
              {items}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="text-right">Total</td>
              <td>${total}</td>
            </tr>
          </tfoot>
        </table>
    );
  }
});



module.exports = Cart;