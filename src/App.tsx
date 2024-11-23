import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import CartMoviePage from './pages/CartMoviePage';
import { LikesPage } from './pages/LikesPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/CartMoviePage/:id' element={<CartMoviePage />} />
      <Route path='/Likes' element={<LikesPage />} />
    </Routes>
  );
}

export default App;
