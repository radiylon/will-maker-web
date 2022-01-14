import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function DataTableRow({ row, editRow }) {
  return (
    <TableRow
      key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      onClick={editRow}
    >
      <TableCell style={{ maxWidth: 70, textOverflow: 'ellipsis', overflow: 'auto', whiteSpace: 'pre-wrap' }}>
        {row.firstName}
      </TableCell>
      <TableCell style={{ maxWidth: 70, textOverflow: 'ellipsis', overflow: 'auto', whiteSpace: 'pre-wrap' }}>
        {row.middleName}
      </TableCell>
      <TableCell style={{ maxWidth: 70, textOverflow: 'ellipsis', overflow: 'auto', whiteSpace: 'pre-wrap' }}>
        {row.lastName}
      </TableCell>
      {/* <TableCell>
        {Date.parse(row.birthDate)}
      </TableCell> */}
      <TableCell>{row.email}</TableCell>
      {/* <TableCell>{row.phoneNumber}</TableCell> */}
      <TableCell>{row.relationshipStatus}</TableCell>
      <TableCell>{row.hasChildren ? row.children && row.children.length ? row.children.length : 0 : 0}</TableCell>
      <TableCell>{row.stateOfResidence}</TableCell>
      <TableCell>{row.hasAttorneyAddOn ? 'Yes' : 'No'}</TableCell>
      <TableCell>{row.isCompleted ? 'Yes' : 'No'}</TableCell>
    </TableRow>
  )
}

export default DataTableRow;