
import './App.css';
import Movies from './components/movies/Movies';
import NavBar from './components/navBar/NavBar';
import { Route, Routes } from 'react-router-dom'
import Movie from './components/movie/Movie';
import Play from './components/play/Play';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<Movies/>}/>
        <Route path='/play' element={<Play/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
