'use strict';

var visibility = false;

var toggleVisbility = function toggleVisbility(e) {
  visibility ? visibility = false : visibility = true;
  render();
};
var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visbility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisbility },
      visibility ? 'Hide Details' : 'Show Details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Hey, These are some details you can now see!'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
