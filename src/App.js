import logo from './logo.svg';
import './App.css';
import Hi from './Hi';
import Hello from './Hello';
import Props from './props';
import Logoo from './logoo';
import Clock from './clock';
import Toggle from './Toggle';
import ClockWithHooks from './ClockWithHooks';
import ClockWithEffect from './ClockWithEffect';
import Weather, { TempInCelsius } from './Weather';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Toggle /> */}
        {/* <ClockWithEffect /> */}
        <Weather/>
        {/* <TemperatureInCelsius/> */}
        <TempInCelsius/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Hello This is <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >  
        </a> */}
        {/* <Hi />
          <Hello /> */}
        {/* <Props />
        <Logoo />
        <Clock />
        <ClockWithHooks /> */}
      </header>
    </div>
  );
}
export default App;
