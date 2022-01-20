// react-router
import { Routes, Route, Link } from 'react-router-dom';
// react-helmet
import { Helmet } from 'react-helmet';
// main
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './pages/404';
// styles
import './App.css';

function App() {

  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #eef0f7; }'}</style>
      </Helmet>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Sign Up</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
        <h1>BELOW ROUTES</h1>
      </main>
      
    </div>
  );
}

export default App;
