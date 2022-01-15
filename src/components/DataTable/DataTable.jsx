import { useState } from 'react';
// material
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
// main
import DataTableRow from './DataTableRow';
import WillEditor from '../WillEditor/WillEditor';

function DataTable({ rows, refetch }) {
  const [willEditorOpen, setWillEditorOpen] = useState(false);
  const [mode, setMode] = useState();

  function addWill() {
    setMode('create');
    setWillEditorOpen(true);
  }

  // TODO: add update UI
  function editWill(id) {
    setMode('edit');
    console.log('EDIT ROW', id);
  }

  // TODO: add delete UI
  // function deleteWill(id) {
  //   console.log('DELETE WILL', id);
  // }

  return (
    <>
      <TableContainer component={Paper}>
        <div style={{ display: 'flex', justifyContent: 'right', marginTop: '10px', marginRight: '10px' }}>
          <Button
            size={'small'}
            variant={'contained'}
            onClick={addWill}
            style={{ fontFamily: 'Lato' }}
          >
            Create Will
          </Button>
        </div>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Middle Name</TableCell>
              <TableCell>Last Name</TableCell>
              {/* <TableCell>Birth Date</TableCell> */}
              <TableCell>Email</TableCell>
              {/* <TableCell>Phone</TableCell> */}
              <TableCell>Relationship Status</TableCell>
              <TableCell>Children</TableCell>
              <TableCell>State of Residence</TableCell>
              <TableCell>Attorney Add-On</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <DataTableRow
                key={index}
                row={row}
                editRow={editWill}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <WillEditor willEditorOpen={willEditorOpen} setWillEditorOpen={setWillEditorOpen} mode={mode} refetch={refetch} />
    </>
  );
}

export default DataTable;
