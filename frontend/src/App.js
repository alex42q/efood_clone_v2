import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index/Index';
import SearchPage from './pages/SearchPage/SearchPage';
import Store from './pages/Store/Store';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />}></Route>
      <Route path='/location/:location' element={<SearchPage />} />
      <Route path='/store/:slug' element={<Store />} />
    </Routes>
  );
}

export default App;
