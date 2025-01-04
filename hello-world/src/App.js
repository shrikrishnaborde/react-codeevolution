import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>Children props</p>
      </Greet>
      <Greet name="Diana" heroName="wonder women">
      </Greet>
      <Greet name="Alice" heroName="queen">
      </Greet>
      <Greet name="Kane" heroName="Ghost">
      </Greet>
    </div>
  );
}

export default App;
