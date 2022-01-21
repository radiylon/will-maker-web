import { useContext } from 'react';
// react-router
import { Link } from 'react-router-dom';
// main
import { UserContext } from '../context/UserContext';

function Home() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <div className='flex items-center justify-center'>
        <h3 className='w-full my-12 text-5xl text-center font-bold text-blue-700'>
          <span>Get started and be a </span>
          <span className='hover:opacity-75 transition duration-300'>
            <Link to={user ? '/dashboard' : '/login'} className='underline underline-offset-8 decoration-pink-500/80'>
              <span className='text-pink-500'>will</span><span className='text-pink-400'>maker</span>  
            </Link>
          </span>
          <span> today.</span>  
        </h3>
      </div>
      <div className='flex items-center justify-center'>
        <div className='w-1/2 my-12 text-3xl text-center font-bold text-zinc-900'>
          "The easiest way to plan for what to do with your assets and belongings when you die."<span className='text-blue-600 text-2xl italic'> - Some people, 2022</span>
        </div>
      </div>
      
    </div>
  )
}

export default Home;