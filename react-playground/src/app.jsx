var React = require("react");
var Reflux = require("reflux");

var actionsSet1 = Reflux.createActions(["updateAaa", "updateBbb"]);
var actionsSet2 = Reflux.createActions(["updateCcc", "ddd"]);

var store = Reflux.createStore({
    listenables: [actionsSet1, actionsSet2],
    onUpdateAaa() {
      console.log("I am aaa");
    },
    onUpdateBbb() {
      console.log("I am bbb");
    },
    onUpdateCcc(foo) {
      console.log("I am ccc " + foo);
    },
    data: {
        items: [],
        tick: 1
    },
    init() {
        setInterval(() => {
            this.data.tick++;
            this.trigger(this.data);
        }, 500);
    },
    getInitialState: function() {
        this.data.items = [1,2].map((it) => { return {
            text: `I am checking in #${it}`
        }});
        return this.data;
    }
});

var App = React.createClass({
    mixins: [Reflux.connect(store)],
    statics: {
      add(a, b) {
        return a + b;
      }
    },
    render() {
        let foo = App.add(1, 1);
        let bar = this.constructor.add(1, 1);
        return (<div>
            <h1>Hello change </h1>
            { this.state.items.map(it => <div>{it.text}</div>) }
            <div>{ this.state.tick }</div>
            <div>1 + 1 = { foo } (or { bar })</div>
            <button onClick={actionsSet1.updateAaa}>aaa</button>
            <button onClick={actionsSet1.updateBbb}>bbb</button>
            <button onClick={actionsSet2.updateCcc.bind(this, new Date())}>ccc</button>
        </div>);
    }
});

console.log(App.add(2, 3));
React.render(<App/>, document.getElementById('example'));