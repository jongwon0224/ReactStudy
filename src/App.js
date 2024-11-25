import logo from './logo.svg';
import './App.css';
import Basic01 from './components/Basic01';
import State01 from './components/State01';
import Export01 from './components/Export01';
import State02 from './components/State02';
import Props01 from './components/Props01';
import Quiz001 from './practice/Quiz001';
import Practice001 from './practice/Practice001';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <Practice001 />
      </header>

      {/* // <Basic01 />,
    // <State01 />,
    // <Export01 />,
    // <State02 />,
    // <Props01 />,
    // <Quiz001 />, */}
      

    </div>
  )
}

export default App;

