var React = require('react');

var Countdown = React.createClass({
  getInitialState: function() {
    return {
      runningTime: 0
    };
  },
  componentDidUpdate: function() {
    var runningTime = this.state.runningTime;

    if (!runningTime) return clearTimeout(this.timer);

    runningTime--;
    this.timer = setTimeout(function() {
      this.setState({runningTime: runningTime});

      if (!runningTime) clearTimeout(this.timer);
    }.bind(this), 1000);
  },
  handleClick: function(event) {
    if (this.state.runningTime) return;
    this.setState({runningTime: this.props.time});
  },
  render: function() {
    var text = this.state.runningTime ? 
               this.props.tpl.replace(/\?time/, this.state.runningTime)
             : this.props.placeholder;
    return (
      <button onClick={this.handleClick}>{text}</button>
    );
  },
  _onStopCount: function() {
    this.state.runningTime = 0;
  }
});

module.exports = Countdown;
