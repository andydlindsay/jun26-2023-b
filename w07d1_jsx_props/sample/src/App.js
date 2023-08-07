import Recipe from './components/Recipe';

function App() {
  return (
    <div className="App">
      <h1>This is our LHL App.</h1>
      <Recipe title='Monkey Bread' ingredientList={['mud', 'rocks', 'creatures']}/>
      <Recipe title='Cookies' ingredientList={['cats', 'dogs']}/>
      <Recipe title='Stinging Nettle Tea' ingredientList={['apples', 'cider', 'very small rocks']}/>
      <Recipe title='Salmon in Puffed Pastry' ingredientList={['flour','sugar','butter']}/>
    </div>
  );
}

export default App;
