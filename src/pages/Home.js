// react
import { useState, useEffect } from 'react';
// gql
import { useQuery } from '@apollo/react-hooks';
import { GET_WILLS } from '../queries';
// main
import DataTable from '../components/DataTable/DataTable';

function Home() {
  const [rows, setRows] = useState([]);

  // fetch wills
  const { data, refetch } = useQuery(GET_WILLS);

  useEffect(() => {
    if (data?.getWills) {
      setRows(data.getWills);
    }
  }, [data]);

  return (
    <div>
      <h1>HOME</h1>
      {/* <DataTable rows={rows} refetch={refetch} /> */}
    </div>
  )
}

export default Home;