import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <div className="App">
      <Stars count={3} />
      <Stars count={1} />
      <Stars count={0} />
      <Stars count={5} />
    </div>
  );
}

export default App;
