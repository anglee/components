(function() {
  "use strict";

  var Clock = React.createClass({
    getInitialState: function() {
      return {
        time: new Date().toString()
      };
    },
    componentDidMount: function() {
      var self = this;
      setInterval(function() {
        self.setState({
            time: new Date().toString()
        });
      }, 1000);
    },
    render: function() {
      return (
        <div>{this.state.time}</div>
      );
    }
  });

  React.render(<Clock />, document.getElementById("clockContainer"));
})();
