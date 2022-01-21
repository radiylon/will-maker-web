import { Link } from 'react-router-dom';

// TODO: handle nav bar active states

function NavBar() {
  return (
    <nav>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between py-7'>
          {/* logo */}
          <div className='flex space-x-10 items-center'>
            <Link to='/' className='text-blue-600 hover:text-blue-500 text-3xl font-bold transition duration-300'>willadmin</Link>
          </div>
          {/* main nav*/}
          <div className='hidden md:flex space-x-10 items-center'>
            <Link to='/dashboard' className='text-zinc-700 hover:text-zinc-400 transition duration-300'>Dashboard</Link>
            <Link to='/login' className='text-zinc-700 hover:text-zinc-400 transition duration-300'>Login</Link>
            <Link to='/register'>
              <button className='px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300'>Sign Up</button>
            </Link>
            {/* <Link to='/register' className='py-2 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded transition duration-300'>Sign Up</Link> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;