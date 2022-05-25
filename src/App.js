import './App.css';
import Hero from './Components/Hero';
import Menu from './Components/Menu';
import "bootstrap/dist/css/bootstrap.css";
import Intro from './Components/Intro';


function App() {
  return (
    <div className="App">
      <Menu/>
      <Hero/>
      <Intro/>
    </div>
  );
}

export default App;
