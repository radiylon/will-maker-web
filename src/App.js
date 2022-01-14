import { useState, useEffect } from 'react';
// apollo
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
// material
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// react-helmet
import { Helmet } from 'react-helmet';
// main
import DataTable from './components/DataTable/DataTable';
// styles
import './App.css';

const GET_WILLS = gql`
  query wills {
    getWills {
      id
      firstName
      middleName
      lastName
      suffix
      preferredName
      birthDate
      relationshipStatus
      hasChildren
      children {
        fullName
        birthDate
      }
      stateOfResidence
      hasAttorneyAddOn
      phoneNumber
      email
      isCompleted
      isEditable 
    }
  }
`;

function App() {
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
      <Helmet>
        <style>{'body { background-color: #eef0f7; }'}</style>
      </Helmet>
      <Box height={'100vh'} display={'flex'} flexDirection={'column'} marginTop={'20px'}>
        <Container maxWidth={'lg'}>
          <Box flex={1} overflow={'auto'} marginLeft={'20px'} marginRight={'20px'}>
            <Grid container>
              <Grid item xs={12}>
                <Typography fontFamily={'Lato'} variant={'h5'}>willadmin</Typography>
              </Grid>
              <Grid item xs={12} style={{ marginTop: '20px' }}>
                <DataTable rows={rows} refetch={refetch} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default App;
