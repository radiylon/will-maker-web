// react-router
import { Routes, Route } from 'react-router-dom';
// react-helmet
import { Helmet } from 'react-helmet';
// main
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './pages/404';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar/NavBar';
// styles
import './App.css';

function App() {

  return (
    <div className='container mx-auto'>
      <Helmet>
        <style>{'body { background-color: #eef0f7; }'}</style>
      </Helmet>
      <NavBar />
      <main>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/dashboard'} element={<Dashboard />} />
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
      </main>
      <footer>
        <h1>FOOTER</h1>
      </footer>
    </div>
  );
}

export default App;
