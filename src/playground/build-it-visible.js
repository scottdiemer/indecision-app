let visibility = false;

const toggleVisbility = (e) => {
  visibility ? visibility = false : visibility = true;
  render();
}
const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>Visbility Toggle</h1>
      <button onClick={toggleVisbility}>
        {visibility ?  'Hide Details' : 'Show Details' }
      </button>
      {visibility && (
        <div>
          <p>Hey, These are some details you can now see!</p>
        </div>
      )}
    </div>
)
  
  ReactDOM.render(template, appRoot);
}

render();
