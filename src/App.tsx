import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Inicio from './pages/Inicio';
import Buscar from './pages/Buscar';
import Biblioteca from './pages/Biblioteca';
import Album from './pages/Album';

function App() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/inicio" element={ <Inicio /> } />
        <Route path="/buscar" element={ <Buscar /> } />
        <Route path="/biblioteca" element={ <Biblioteca /> } />
        <Route path="/album/:id" element={ <Album /> } />
      </Route>
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
