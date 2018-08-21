'use strict';

console.log("app.js is running");

// TODO: Run following command so babel can convert code
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch


var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']

  // JSX - JavaScript XML
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    )
  )
);

var user = {
  name: 'Scott',
  age: 41,
  location: 'Orlando'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location:',
      ' ',
      ' ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age:',
    ' ',
    ' ',
    user.age
  ),
  getLocation(user.location)
);

// Create a templateTwo const JSX expression
// div 
// h1 - > Scott Diemer
// p -> Age: 41
// p -> Location: Orlando
// Render templateTwo instead of template

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
