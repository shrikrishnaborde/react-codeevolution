import logo from './logo.svg';
import './App.css';
import Hero from './component/Hero';
import ErrorBoundry from './component/ErrorBoundry';

function App() {
  return (
    <div className="App">
      <ErrorBoundry>
          <Hero heroName="Batman"/>
          <Hero heroName="Superman"/>
          <Hero heroName="Joker"/>
      </ErrorBoundry>
    </div>
  );
}

export default App;
