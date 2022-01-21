

function AuthForm({ type, formValues, setFormValues, onSubmit }) {
  const { username, email, password, confirmPassword } = formValues;

  return (
    <div>
      <div className='flex items-center justify-center'>
        <div className='w-1/2 px-20 py-6 mt-4 text-left bg-white shadow-lg rounded-lg'>
          {/* TITLE */}
          <h3 className='text-2xl font-bold text-center'>
            {type[0].toUpperCase() + type.slice(1)}
          </h3>
          <form autoComplete='off'>
            {/* USERNAME */}
            <div className='mt-4'>
              <div>
                <label className='block' htmlFor='username'>Username</label>
                <input
                  id='username'
                  type='text'
                  placeholder='Username'
                  className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300'
                  value={username ?? ''}
                  onChange={(e) => setFormValues({ ...formValues, username: e.target.value })}
                  autoFocus
                />
              </div>
            </div>
            {/* EMAIL */}
            {type && type === 'register' && (
              <div className='mt-4'>
                <div>
                  <label className='block' htmlFor='email'>Email</label>
                  <input
                    id='email'
                    type='email'
                    placeholder='Email'
                    className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300'
                    value={email ?? ''}
                    onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                  />
                </div>
              </div>
            )}
            {/* PASSWORD */}
            <div className='mt-4'>
              <div>
                <label className='block' htmlFor='password'>Password</label>
                <input
                  id='password'
                  type='password'
                  placeholder='Password'
                  className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300'
                  value={password ?? ''}
                  onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                />
              </div>
            </div>
            {/* CONFIRM PASSWORD */}
            {type && type === 'register' && (
              <div className='mt-4'>
                <div>
                  <label className='block' htmlFor='confirm-password'>Confirm Password</label>
                  <input
                    id='confirm-password'
                    type='password'
                    placeholder='Password'
                    className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300'
                    value={confirmPassword ?? ''}
                    onChange={(e) => setFormValues({ ...formValues, confirmPassword: e.target.value })}
                  />
                </div>
              </div>
            )}
            {/* SUBMIT BUTTON */}
            <div className='flex justify-center'>
              <button
                className='px-6 py-2 mt-5 text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300'
                onClick={(e) => onSubmit(e)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AuthForm;