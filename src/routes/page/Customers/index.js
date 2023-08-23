import React from 'react'
import TableComponent from '../../../components/TableComponent'
import { useSelector } from 'react-redux';
import ButtonComponent from '../../../components/ButtonComponent';

const headCells =[
  {
    id: 'productName',
    numeric: false,
    disablePadding: true,
    label: 'Product Name',
    sort: true,
  },
  {
    id: 'qty',
    numeric: true,
    disablePadding: false,
    label: 'Qty',
    sort: false,
  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'Price',
    sort: false,
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    sort: false,
    label: 'Action',
    render: (row) => (
      <>
        <ButtonComponent
          sx={{
            marginBottom: '8px',
            marginRight: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
          color="secondary"
          // onClick={() => handleEdit(row.id)}
          title="Edit"
        />
        <ButtonComponent
          sx={{
            marginBottom: '8px',
            marginRight: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
          color="secondary"
          // onClick={() => handleDelete(row.id)}
          title="Delete"
        />
        <ButtonComponent
          sx={{
            marginBottom: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
          color="secondary"
          // onClick={() => handleAddToCart(row.id)}
          title="Add to Cart"
        />
      </>
    ),
  },
];


const Customers = () => {
  const user = useSelector((state) => state?.product);
  console.log("user:",user);
  const visibleRows = user

  return (
   <TableComponent 
   headCells={headCells}
   row={visibleRows}
  //  order={order}
  //  orderByField={orderByField}
  //  onRequestSort={handleRequestSort}
  //  page={page}
  //  setPage={setPage}
  //  count={filteredRows.length}
  //  handleChangePage={handleChangePage}
  //  rowsPerPageOptions={[2, 10, 20]}
  //  handleChangeRowsPerPage={handleChangeRowsPerPage}
  //  rowsPerPage={rowsPerPage}
  //  setRowsPerPage={setRowsPerPage}
  //  showPagination={showPagination}
   />
 
  )
}

export default Customers
