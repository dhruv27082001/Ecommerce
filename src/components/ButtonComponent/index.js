import { Button } from '@mui/material'
import React from 'react'

const ButtonComponent = (props) => {
    const { title, type, fullWidth, variant, sx } = props;
    return (
        <Button
            type={type}
            fullWidth={fullWidth}
            variant={variant}
            sx={sx}
        >{title}
        </Button>
    )
}

export default ButtonComponent
