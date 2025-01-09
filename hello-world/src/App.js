import logo from './logo.svg';
import './App.css';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRInputParentRef from './components/FRInputParentRef';

function App() {
  return (
    <div className="App">
      {/*<RefsDemo />*/}
      {/*<FocusInput />*/}
      <FRInputParentRef />
    </div>
  );
}

export default App;
