import React from "react";
import { Link, Typography } from "@mui/material";

const Copyright = ({sx}) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={sx} >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Gheewala Infotech Pvt. Ltd.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
