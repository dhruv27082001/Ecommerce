import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Menu, MenuItem, styled } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import TableComponent from "../../../components/TableComponent";
import ButtonComponent from "../../../components/ButtonComponent";
import { customerList } from "../../../redux/action";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CustomModal from "../../../components/CustomModal";
import InputComponent from "../../../components/InputComponent";
import { useNavigate } from "react-router-dom";

const StyledButton = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "20px",
  marginTop: "20px",
  marginRight: "10px",
});

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
            <MenuItem onClick={() => handleView(row)}>
              <VisibilityIcon /> View
            </MenuItem>
            <MenuItem onClick={() => handleEdit(row)}>
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
  console.log("username", customer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openUser,setOpenUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleView = (id) => {
    setSelectedUser(id);
    setOpenModal(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(customerList());
  }, [dispatch]);
  
  const handleAddUser = () => {
    // Navigate to the add user page
    navigate("/customerList-Add");  };
  
    const handleEdit = (user) => {
      setSelectedUser(user);
      // Navigate to the edit page with the selected user's data
      navigate(`/customerList-Edit/${user.id}`);
    };
    
  

  return (
    <>
      <StyledButton>
      <ButtonComponent
    style={{
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    }}
    title="+ Add User"
    onClick={handleAddUser}
  />
      </StyledButton>
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
            <InputLabel>{`Username: ${selectedUser?.username}`}</InputLabel>
            <InputLabel>{`Name: ${selectedUser?.name?.firstname} ${selectedUser?.name?.lastname}`}</InputLabel>
            <InputLabel>{`Password: ${selectedUser?.password}`}</InputLabel>
          </Box>
        </div>
      </CustomModal>
      <TableComponent headCells={headCells} row={customer} />
    </>
  );
};

export default Customers;
