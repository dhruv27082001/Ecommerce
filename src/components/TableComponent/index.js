import React from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import {orderBy} from 'loadsh';

const TableComponent = (props) => {
  const {
    row,
    headCells,
    orderByField,
    order,
    onRequestSort,
    rowsPerPageOptions,
    count,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
    showPagination,
  } = props;

  const sortVisibleRows = (list, order, orderByField) => {
    return orderBy(list, [orderByField], [order]);
  }

  const createSortHandler = (property) => () => {
    onRequestSort(property);
  };

  const sortedRow = sortVisibleRows(row, order, orderByField);


  return (
    <Box sx={{ width: '100%',marginTop:'20px'}}>
      <Paper sx={{ width: '100%', mb: 2,backgroundColor:'whitesmoke'}}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow sx={{margin:1}}>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? 'right' : 'left'}
                    padding={headCell.disablePadding ? 'none' : 'normal'}
                    sortDirection={orderByField === headCell.id ? order : false}
                    style={{backgroundColor:"lavenderblush",fontWeight:"bolder",fontSize:20}}
                  >
                    {headCell.sort === false ? (
                      headCell.label
                    ) : (
                      <TableSortLabel
                        active={orderByField === headCell.id}
                        direction={orderByField === headCell.id ? order : 'asc'}
                        onClick={createSortHandler(headCell.id)}
                      >
                        {headCell.label}
                        {orderByField === headCell.id ? (
                          <Box component="span" sx={visuallyHidden}>
                            {order === 'desc'
                              ? 'sorted descending'
                              : 'sorted ascending'}
                          </Box>
                        ) : null}
                      </TableSortLabel>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {!sortedRow.length ? (
                <TableRow>
                  <TableCell colSpan={headCells.length} align="center">
                    No Data Found
                  </TableCell>
                </TableRow>
              ) : (
                sortedRow.map((row) => (
                  <TableRow key={row.id}>
                    {headCells.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.numeric ? 'right' : 'left'}
                        style={{fontSize:17}}
                      >
                        {column.render ? column.render(row) : row[column.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {showPagination && sortedRow.length ? (
          <TablePagination
            rowsPerPageOptions={rowsPerPageOptions}
            component="div"
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        ) : null}
      </Paper>
    </Box>
  );
};

export default TableComponent;