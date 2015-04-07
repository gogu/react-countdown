var React = require('react');
var Countdown = require('../src/react-countdown.jsx');

React.render(
  <Countdown time="30" tpl="重新发送 (?time)" placeholder="获取验证码" />,
  document.getElementById('countdown')
);
