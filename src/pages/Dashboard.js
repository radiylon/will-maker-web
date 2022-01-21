import { useState, useContext, useEffect } from 'react';
// gql
import { useQuery, useMutation } from '@apollo/react-hooks';
import { 
  // GET_WILL,
  GET_WILL_BY_USER_ID,
  CREATE_WILL,
  UPDATE_WILL
} from '../queries';
// react-router
import { useNavigate } from 'react-router-dom';
// main
import { UserContext } from '../context/UserContext';
import WillCreate from '../components/WillCreate/WillCreate';
import WillEdit from '../components/WillEdit/WillEdit';

function Dashboard() {
  const { user } = useContext(UserContext);

  const [mode, setMode] = useState('dashboard');
  const [will, setWill] = useState();

  // react-router navigate
  const navigate = useNavigate();

  const { data, refetch } = useQuery(GET_WILL_BY_USER_ID, {
    variables: {
      id: user.id
    }
  });

  console.log('will', will);

  const [createWill] = useMutation(CREATE_WILL, {
    onCompleted: (data) => {
      console.log('WILL CREATED', data);
      navigate('/dashboard');
      refetch();
    }
  });

  const [updateWill] = useMutation(UPDATE_WILL, {
    onCompleted: (data) => {
      console.log('WILL UPDATED', data);
      navigate('/dashboard');
      refetch();
    }
  });

  useEffect(() => {
    if (data?.getWillByUserId) {
      setWill(data.getWillByUserId);
    } else {
      let newWill = {
        firstName: '',
        lastName: '',
        middleName: '',
        suffix: '',
        preferredName: '',
        email: '',
        birthDate: '',
        relationshipStatus: '',
        hasChildren: false,
        children: [],
        stateOfResidence: '',
        hasAttorneyAddOn: false,
        phoneNumber: '',
        isCompleted: false,
        isEditable: true,
      }
      setWill(newWill);
    }
  }, [data]);

  async function onSubmit(will) {
    let input = { ...will };
    delete input.id;
    delete input.__typename;
    if (will) {
      if (will.id) {
        await updateWill({
          variables: {
            id: will.id,
            input: input,
          }
        });
      } else {
        await createWill({
          variables: {
            input: input,
          }
        });
      }
    }
  }

  function handleWill() {
    if (will?.id) {
      setMode('edit');
    } else {
      setMode('create');
    }
  }

  return (
    <div>
      {/* DASHBOARD HEADER */}
      <div className='flex items-center justify-center mb-10'>
        <h1 className='text-3xl font-bold text-zinc-900'>{`${will?.id ? 'Welcome back' : 'Hello'}, ${user.username}!` ?? ''}</h1>
      </div>
      {/* DASHBOARD GRID */}
      {mode === 'dashboard' && (
        <div className='flex items-center justify-center'>
          {/* WILL */}
          {/* TODO: Refactor into reusable card */}
          <div className='w-1/2'>
            <div className='min-w-full px-10 py-6 text-left bg-white shadow-lg rounded-lg'>
              <h3 className='text-2xl font-bold text-center'>{will?.id ? 'Edit Will' : 'Create Will'}</h3>
              <p className='mt-4'>
                A will-based estate plan&#8212;customized, state specific, and super cheap. Create your
                backup plan for who will look after your children and what should happen to your assets, 
                if something happens.
              </p>
              <div className='text-right mt-4'>
                {/* TODO: Refactor into reusable button */}
                <button 
                  className='px-6 py-2 text-white text-sm bg-green-600 rounded-lg hover:bg-green-500 transition duration-300'
                  onClick={handleWill}
                >
                  {will?.id ? 'Update' : 'Start'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* WILL CREATE */}
      {mode === 'create' && (
        <WillCreate
          will={will}
          setWill={setWill}
          setMode={setMode}
          onSubmit={onSubmit}
        />
      )}
      {/* WILL EDIT */}
      {mode === 'edit' && (
        <WillEdit
          will={will}
          setWill={setWill}
          setMode={setMode}
          onSubmit={onSubmit}
        />
      )}
    </div>
  )
}

export default Dashboard;