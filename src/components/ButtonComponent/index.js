import { Button } from '@mui/material'
import React from 'react'

const ButtonComponent = (props) => {
    const { title, type, fullWidth, variant, sx,style,onClick } = props;
    return (
        <Button
            type={type}
            fullWidth={fullWidth}
            variant={variant}
            sx={sx}
            style={style}
            onClick={onClick}
        >{title}
        </Button>
    )
}

export default ButtonComponent
