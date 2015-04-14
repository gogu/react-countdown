var Countdown = ReactCountdown.Normal;

React.render(
  <Countdown tpl="重新获取（?time）" placeholder="获取验证码" time="30" />,
  document.getElementById('countdown')
);
