import { useContext } from 'react';
// react-router
import { Link } from 'react-router-dom';
// main
import { UserContext } from '../../context/UserContext';

// TODO: handle nav bar active states

function NavBar() {
  const { user, logoutUser } = useContext(UserContext);

  return (
    <nav>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between py-7'>
          {/* logo */}
          <div className='flex space-x-10 items-center'>
            <Link to='/' className='hover:opacity-75 text-2xl font-bold transition duration-300'>
              <span className='text-zinc-900'>will</span>
              <span className='text-green-600'>maker</span>
            </Link>
          </div>
          {/* main nav*/}
          <div className='hidden md:flex space-x-10 items-center'>
            {user && (
              <>
                <Link to='/dashboard' className='text-zinc-700 hover:text-zinc-400 text-sm transition duration-300'>Dashboard</Link>
                <Link to='/login' onClick={logoutUser} className='text-zinc-700 hover:text-zinc-400 text-sm transition duration-300'>Logout</Link>
              </>
            )}
            {!user && (
              <>
                <Link to='/login' className='text-zinc-700 hover:text-zinc-400 text-sm transition duration-300'>Login</Link>
                <Link to='/register'>
                  <button className='px-6 py-2 text-white text-sm bg-green-600 rounded-lg hover:bg-green-500 transition duration-300'>Sign Up</button>
                </Link>  
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;