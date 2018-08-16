console.log("app.js is running");

// TODO: Run following command so babel can convert code
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch


var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
}

// JSX - JavaScript XML
const template = (
  <div>
    <h1>
      {app.title}
    </h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>
        Item One
      </li>
      <li>
        Item Two
      </li>
    </ol>
  </div>
);

var user = {
  name: 'Scott',
  age: 41,
  location: 'Orlando'
}

function getLocation(location) {
  if (location) {
    return (
      <p>
Location:
        {' '} 
        {' '}
        {location}
      </p>
);
  } 
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && (
    <p>
Age:
      {' '} 
      {' '}
      {user.age}
    </p>
)}
    {getLocation(user.location)}
  </div>
);

// Create a templateTwo var JSX expression
// div 
// h1 - > Scott Diemer
// p -> Age: 41
// p -> Location: Orlando
// Render templateTwo instead of template

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
