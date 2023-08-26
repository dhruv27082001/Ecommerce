import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import TableComponent from "../../../components/TableComponent";
import ButtonComponent from "../../../components/ButtonComponent";
import { customerList } from "../../../redux/action";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CustomModal from "../../../components/CustomModal";

const Customers = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const headCells = [
    {
      id: "email",
      numeric: false,
      disablePadding: true,
      label: "Email",
      sort: true,
    },
    {
      id: "username",
      numeric: true,
      disablePadding: false,
      label: "Username",
      sort: false,
    },
    {
      id: "password",
      numeric: true,
      disablePadding: false,
      label: "Password",
      sort: false,
    },
    {
      id: "name",
      numeric: true,
      disablePadding: false,
      label: "Name",
      sort: false,
      render: (user) => `${user.name.firstname} ${user.name.lastname}`,
    },
    {
      id: "address",
      numeric: true,
      disablePadding: false,
      label: "City",
      sort: false,
      render: (user) => `${user.address.city}`,
    },
    {
      id: "phone",
      numeric: true,
      disablePadding: false,
      label: "Phone",
      sort: false,
    },
    {
      id: "action",
      numeric: true,
      disablePadding: false,
      sort: false,
      label: "Action",
      render: (row) => (
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{ fontSize: "2rem", fontWeight: "bold", color: "black" }}
          >
            ...
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleView}>
              <VisibilityIcon /> View
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <EditIcon /> Edit
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <DeleteIcon /> Delete
            </MenuItem>
          </Menu>
        </div>
      ),
    },
  ];

  const customer = useSelector((state) => state?.product?.customer);
  console.log("username", customer.username);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleView = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(customerList());
  }, [dispatch]);

  return (
    <>
      <CustomModal open={openModal} onClose={handleCloseModal} title="View">
        <div style={{ width: "100%" }}>
          <Box
            sx={{
              display: "block",
              displayPrint: "none",
              m: 1,
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            <InputLabel>{`Username: ${customer?.username}`}</InputLabel>
          </Box>
          <Box
            sx={{
              display: "none",
              displayPrint: "block",
              m: 1,
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            Print Only (Hide on screen only)
          </Box>
        </div>
      </CustomModal>
      <TableComponent headCells={headCells} row={customer} />
    </>
  );
};

export default Customers;
