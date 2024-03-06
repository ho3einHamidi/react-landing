
import './App.css';
import { Landing } from './components/landing/Landing';
import { Navbar } from './components/menu/Navbar';
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
