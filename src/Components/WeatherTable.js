import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function WeatherTable({ headers, rows, isNineDay }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map(header =>
              <TableCell align="center">{header}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {isNineDay ?
            rows.map(row => {
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {headers.map((header, headerIndex) => {
                  if (headerIndex !== 0) {
                    <>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row[header]}</TableCell>
                    </>
                  }
                })
                }
              </TableRow>
            })
            :
            rows.map(row => {
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.description}</TableCell>
              </TableRow>
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeatherTable;
