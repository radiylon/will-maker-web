function WillCreate({ will, setWill, setMode, onSubmit }) {
  const {
    firstName,
    lastName,
    middleName,
    suffix,
    preferredName,
    email,
    // birthDate,
    // relationshipStatus,
    // hasChildren,
    // children,
    stateOfResidence,
    // hasAttorneyAddOn,
    phoneNumber,
    // isCompleted,
    // isEditable
  } = will;

  function _onSubmit(e) {
    e.preventDefault();
    onSubmit(will);
  }

  return (
    <div>
      <button 
        className='px-6 py-2 text-white text-sm bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300'
        onClick={() => setMode('dashboard')}
      >
        Go Back
      </button>
      <div className='flex items-center justify-center'>
        <div className='w-full px-20 py-6 mt-4 text-left bg-white shadow-lg rounded-lg'>
          {/* TITLE */}
          <h3 className='mb-4 text-2xl font-bold text-center'>Create Will</h3>
          {/* TODO: Refactor form into separate component */}
          <form autoComplete='off' onSubmit={_onSubmit}>
            <div className='grid grid-cols-2 gap-4'>
              {/* FIRST NAME */}
              <div className='mt-4'>
                <div>
                  <label className='block' htmlFor='firstName'>First Name</label>
                  <input
                    id='firstName'
                    type='text'
                    placeholder='First Name'
                    className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300'
                    value={firstName ?? ''}
                    onChange={(e) => setWill({ ...will, firstName: e.target.value })}
                    autoFocus
                  />
                </div>
              </div>
              {/* MIDDLE NAME */}
              <div className='mt-4'>
                <div>
                  <label className='block' htmlFor='middleName'>Middle Name</label>
                  <input
                    id='middleName'
                    type='text'
                    placeholder='Middle Name'
                    className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300'
                    value={middleName ?? ''}
                    onChange={(e) => setWill({ ...will, middleName: e.target.value })}
                  />
                </div>
              </div>
              {/* LAST NAME */}
              <div className='mt-4'>
                <div>
                  <label className='block' htmlFor='lastName'>Last Name</label>
                  <input
                    id='lastName'
                    type='text'
                    placeholder='Last Name'
                    className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300'
                    value={lastName ?? ''}
                    onChange={(e) => setWill({ ...will, lastName: e.target.value })}
                  />
                </div>
              </div>
              {/* SUFFIX */}
              <div className='mt-4'>
                <div>
                  <label className='block' htmlFor='suffix'>Suffix</label>
                  <input
                    id='suffix'
                    type='text'
                    placeholder='Suffix'
                    className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300'
                    value={suffix ?? ''}
                    onChange={(e) => setWill({ ...will, suffix: e.target.value })}
                  />
                </div>
              </div>
              {/* PREFFERED NAME */}
              <div className='mt-4'>
                <div>
                  <label className='block' htmlFor='preferredName'>Preferred Name</label>
                  <input
                    id='preferredName'
                    type='text'
                    placeholder='Preferred Name'
                    className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300'
                    value={preferredName ?? ''}
                    onChange={(e) => setWill({ ...will, preferredName: e.target.value })}
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
                    className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300'
                    value={email ?? ''}
                    onChange={(e) => setWill({ ...will, email: e.target.value })}
                  />
                </div>
              </div>
              {/* PHONE */}
              <div className='mt-4'>
                <div>
                  <label className='block' htmlFor='phone'>Phone Number</label>
                  <input
                    id='phone'
                    type='tel'
                    placeholder='Phone Number'
                    className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300'
                    value={phoneNumber ?? ''}
                    onChange={(e) => setWill({ ...will, phoneNumber: e.target.value })}
                  />
                </div>
              </div>
              {/* STATE OF RESIDENCE */}
              <div className='mt-4'>
                <div>
                  <label className='block' htmlFor='stateOfResidence'>State of Residence</label>
                  <input
                    id='stateOfResidence'
                    type='text'
                    placeholder='State of Residence'
                    className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300'
                    value={stateOfResidence ?? ''}
                    onChange={(e) => setWill({ ...will, stateOfResidence: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <button
                type='submit'
                className='px-6 py-2 mt-5 text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300'
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

export default WillCreate;