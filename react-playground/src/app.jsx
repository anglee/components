var React = require("react");

var App = React.createClass({
    render() {
        return (<div>
            <h1>Hello change </h1>
            {[1,2,3].map(it => <div>{it}</div>)}
        </div>);
    }
});

React.render(<App/>, document.getElementById('example'));