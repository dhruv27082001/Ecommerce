import React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import  {closeSnackbar, enqueueSnackbar } from 'notistack';

const NotiStackComponent = () => {
    const showSnackbar = (title, variant) => {
        enqueueSnackbar(title, {
            variant: variant,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
            },
            action: (key) => (
                <IconButton
                    color="inherit"
                    size="small"
                    onClick={() => {
                        closeSnackbar(key);
                    }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            ),
        });
    };

    return {
        showSnackbar, // Wrap the function in an object before exporting
    };
};

export default NotiStackComponent;
