import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="index" element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/inicio" element={ <Home /> } />
        <Route path="/buscar" element={ <Home /> } />
        <Route path="/biblioteca" element={ <Home /> } />
      </Route>
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
