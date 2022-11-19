import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as constants from '../Components/Constants';

function WeatherTable({ headers, rows, isNineDay, isCurrentWeather }) {
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
          {
            isNineDay ?
              rows.map((row) => {
                return (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    {
                      headers.map((header, headerIndex) => {
                        for (let i = 0; i < row.results.length; i++) {
                          if (i + 1 === headerIndex) {
                            if (row.name === 'Icon') {
                              return (
                                <TableCell align="left">
                                  <img
                                    src={`${constants.WEATHER_ICON_START}${row.results[i]}${constants.WEATHER_ICON_END}` || constants.emptyText}
                                    height='100px'
                                  />
                                </TableCell>
                              )
                            } else {
                              return (
                                <TableCell align="left">{row.results[i] || constants.emptyText}</TableCell>
                              )
                            }
                          }
                        }

                      })
                    }
                  </TableRow>
                )
              })
              :
              rows.map((row) => {
                return (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    {
                      isCurrentWeather ?
                        row.description.map(descrip => {
                          return (
                            <TableCell align="left">{descrip || constants.emptyText}</TableCell>
                          )
                        })
                        :
                        <TableCell align="left">{row.description || constants.emptyText}</TableCell>
                    }
                  </TableRow>
                )
              })}
        </TableBody>
      </Table>
    </TableContainer >
  );
};

export default WeatherTable;
