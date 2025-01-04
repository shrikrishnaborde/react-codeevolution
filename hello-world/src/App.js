import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman"/>
      <Greet name="Diana" heroName="wonder women"/>
      <Greet name="Alice" heroName="queen"/>
      <Greet name="Kane" heroName="Ghost"/>
    </div>
  );
}

export default App;
