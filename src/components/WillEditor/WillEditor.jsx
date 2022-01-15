import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
// material
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
// main
import { CREATE_WILL } from './queries.js';

function WillEditor({ willId, willEditorOpen, setWillEditorOpen, mode, refetch }) {
  const [will, setWill] = useState();

  const states = ['AK','AL','AR','AZ','CA','CO','CT','DE','FL','GA','HI','IA','ID','IL','IN','KS','KY','LA','MA','MD','ME','MI',
    'MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VT','WA','WI','WV','WY'];

  const [createWill] = useMutation(CREATE_WILL, {
    onCompleted: (data) => {
      setWill(data.createWill);
      setWillEditorOpen(false);
      refetch();
    },
    onError: (err) => {
      console.log('Error on createWill:', err);
    }
  });

  async function _createWill(input) {
    await createWill({
      variables: {
        input: input,
        fetchPolicy: 'no-fetch',
      }
    });
  }

  // TODO: _updateWill
  // async function _updateWill(id, input) {
  //   console.log('UPDATE WILL');
  // }

  async function handleSubmit() {
    if (mode === 'create') {
      return await _createWill(will);
    }
    // TODO: _updateWill
  }

  function handleClose() {
    setWillEditorOpen(false);
  }

  useEffect(() => {
    let newWill = {
      firstName: '',
      lastName: '',
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
    if (mode === 'create') {
      setWill(newWill);
    }
    // TODO: else, fetch will using willId
  }, [mode, willId]);

  return (
    <div>
      <Dialog open={willEditorOpen} onClose={handleClose} maxWidth={'lg'} fullWidth={true}>
        <DialogTitle>{mode === 'create' ? 'Create Will' : 'Edit Will'}</DialogTitle>
        <DialogContent>
          {mode === 'create' && (
            <DialogContentText style={{ marginBottom: '20px' }}>
              Fill out the following information and press Submit to complete your will.
            </DialogContentText>
          )}
          {mode === 'edit' && (
            <DialogContentText style={{ marginBottom: '20px' }}>
              Make changes to a current will and press Submit to update.
            </DialogContentText>
          )}
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <TextField
                margin={'dense'}
                label={'First Name'}
                variant={'standard'}
                value={will?.firstName}
                onChange={(e) => {
                  setWill({ ...will, firstName: e.target.value });
                }}
                autoFocus
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                margin={'dense'}
                label={'Middle Name'}
                variant={'standard'}
                value={will?.middleName}
                onChange={(e) => {
                  setWill({ ...will, middleName: e.target.value });
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                margin={'dense'}
                label={'Last Name'}
                variant={'standard'}
                value={will?.lastName}
                onChange={(e) => {
                  setWill({ ...will, lastName: e.target.value });
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                margin={'dense'}
                label={'Suffix Name'}
                variant={'standard'}
                value={will?.suffix}
                onChange={(e) => {
                  setWill({ ...will, suffix: e.target.value });
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                margin={'dense'}
                label={'Preferred Name'}
                variant={'standard'}
                value={will?.preferredName}
                onChange={(e) => {
                  setWill({ ...will, preferredName: e.target.value });
                }}
                fullWidth
              />
            {/* TODO: BIRTHDATE GOES HERE */}
            </Grid>
            <Grid item xs={3}>
              <TextField
                margin={'dense'}
                label={'Email Address'}
                variant={'standard'}
                value={will?.email}
                type={'email'}
                onChange={(e) => {
                  setWill({ ...will, email: e.target.value });
                }}
                fullWidth
              />
            </Grid>
            {/* TODO: PHONE NUMBER GOES HERE */}
            <Grid item xs={3}>
              <FormControl variant={'standard'} style={{ marginTop: '8px' }} fullWidth>
                <InputLabel>Relationship Status</InputLabel>
                <Select
                  value={will?.relationshipStatus}
                  label={'Relationship Status'}
                  onChange={(e) => {
                    setWill({ ...will, relationshipStatus: e.target.value });
                  }}
                  fullWidth
                >
                  <MenuItem value={''}><em>None</em></MenuItem>
                  <MenuItem value={'Single'}>Single</MenuItem>
                  <MenuItem value={'Engaged'}>Engaged</MenuItem>
                  <MenuItem value={'Married'}>Married</MenuItem>
                  <MenuItem value={'Divorced'}>Divorced</MenuItem>
                  <MenuItem value={'Widow/Widower'}>Widow/Widower</MenuItem>
                  <MenuItem value={'Domestic Partnership'}>Registered Domestic Partnership</MenuItem>
                  <MenuItem value={'Civil Union'}>Civil Union</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant={'standard'} style={{ marginTop: '8px' }} fullWidth>
                <InputLabel>Do you have children?</InputLabel>
                <Select
                  value={will?.hasChildren}
                  label={'Do you have any children?'}
                  onChange={(e) => {
                    setWill({ ...will, hasChildren: e.target.value });
                  }}
                  fullWidth
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant={'standard'} style={{ marginTop: '8px' }} fullWidth>
                <InputLabel>State of Residence</InputLabel>
                <Select
                  value={will?.stateOfResidence}
                  label={'State of Residence'}
                  onChange={(e) => {
                    setWill({ ...will, stateOfResidence: e.target.value });
                  }}
                  fullWidth
                >
                  <MenuItem value={''}><em>None</em></MenuItem>
                  {states.map((state, index) => {
                    return (
                      <MenuItem key={index} value={state}>{state}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant={'standard'} style={{ marginTop: '8px' }} fullWidth>
                <InputLabel>Attorney Add-On</InputLabel>
                <Select
                  value={will?.hasAttorneyAddOn}
                  label={'Attorney Add-On'}
                  onChange={(e) => {
                    setWill({ ...will, hasAttorneyAddOn: e.target.value });
                  }}
                  fullWidth
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default WillEditor;
