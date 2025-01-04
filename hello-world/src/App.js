import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce"/>
      <Greet name="Diana"/>
      <Greet name="Alice"/>
      <Greet name="Kane"/>
    </div>
  );
}

export default App;
