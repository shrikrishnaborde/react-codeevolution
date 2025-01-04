import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>Children props</p>
      </Greet>
      <Welcome name="Clark" heroName="Superman">
        <p>Class Childrn props</p>
      </Welcome>
    </div>
  );
}

export default App;
