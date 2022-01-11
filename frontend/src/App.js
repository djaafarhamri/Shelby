import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
