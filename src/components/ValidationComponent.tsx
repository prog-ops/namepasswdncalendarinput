import {CheckCircle, CheckCircleOutlined} from "@mui/icons-material";
import {colors, Stack, Typography} from "@mui/material";
import React from "react";

interface Props {
    text: string
    flag: boolean,
}
export default function ValidationComponent({text, flag}: Props){
    return(
        <Stack color='white' display='flex' direction='row' alignItems='center'>
            {flag ?
                <CheckCircle sx={{
                    color: '#00D1FF',
                    margin: '8px',
                }}/> :
                <CheckCircleOutlined sx={{
                    color: colors.grey[700],
                    margin: '8px',
                }}/>
            }
            <Typography sx={{
                marginLeft: '8px',
                fontSize: '14px',
                fontWeight: '400',
            }}>{text}</Typography>
        </Stack>
    )
}
