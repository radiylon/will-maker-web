import { useState, useContext } from 'react';
// gql
import { useMutation } from '@apollo/react-hooks';
// react-router
import { useNavigate } from 'react-router-dom';
// main
// import AuthForm from '../components/AuthForm/AuthForm';
import { UserContext } from '../context/UserContext';
// queries
import { REGISTER_USER } from '../queries';

function Register() {

  // TODO: separate form out into it's own component

  const context = useContext(UserContext);

  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // react-router navigate
  const navigate = useNavigate();

  // TODO: use loading state
  const [registerUser] = useMutation(REGISTER_USER, {
    onCompleted: (data) => {
      context.loginUser(data.registerUser);
      navigate('/dashboard');
    },
    variables: {
      input: formValues,
    },
  });

  async function onSubmit(e) {
    e.preventDefault();
    await registerUser();
  }

  return (
    <div>
      <div className='flex items-center justify-center'>
        <div className='w-1/2 px-20 py-6 mt-4 text-left bg-white shadow-lg rounded-lg'>
          {/* TITLE */}
          <h3 className='text-2xl font-bold text-center'>Register</h3>
          <form autoComplete='off' onSubmit={onSubmit}>
            {/* USERNAME */}
            <div className='mt-4'>
              <div>
                <label className='block' htmlFor='username'>Username</label>
                <input
                  id='username'
                  type='text'
                  placeholder='Username'
                  className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 transition duration-300'
                  value={formValues.username ?? ''}
                  onChange={(e) => setFormValues({ ...formValues, username: e.target.value })}
                  autoFocus
                />
              </div>
            </div>
            {/* EMAIL */}
            <div className='mt-4'>
              <div>
                <label className='block' htmlFor='email'>Email</label>
                <input
                  id='email'
                  type='email'
                  placeholder='Email'
                  className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 transition duration-300'
                  value={formValues.email ?? ''}
                  onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                />
              </div>
            </div>
            {/* PASSWORD */}
            <div className='mt-4'>
              <div>
                <label className='block' htmlFor='password'>Password</label>
                <input
                  id='password'
                  type='password'
                  placeholder='Password'
                  className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 transition duration-300'
                  value={formValues.password ?? ''}
                  onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                />
              </div>
            </div>
            {/* CONFIRM PASSWORD */}
            <div className='mt-4'>
              <div>
                <label className='block' htmlFor='confirm-password'>Confirm Password</label>
                <input
                  id='confirm-password'
                  type='password'
                  placeholder='Password'
                  className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 transition duration-300'
                  value={formValues.confirmPassword ?? ''}
                  onChange={(e) => setFormValues({ ...formValues, confirmPassword: e.target.value })}
                />
              </div>
            </div>
            {/* SUBMIT BUTTON */}
            <div className='flex justify-center'>
              <input
                type='submit'
                value='Submit' 
                className='px-6 py-2 mt-5 text-white bg-green-600 rounded-lg hover:bg-green-500 transition duration-300'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;