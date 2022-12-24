import {BaseToolbarProps} from "@mui/x-date-pickers/internals";
import {Box, Typography} from "@mui/material";
import {DatePickerToolbar} from "@mui/x-date-pickers/DatePicker/DatePickerToolbar";
import * as React from "react";

export const CustomToolbar = (props: BaseToolbarProps<Date, Date | null>) => {
    return (
        <Box style={{
            marginTop: 20,
            marginLeft: '30px',
            justifyContent: 'space-around'
        }}>
            <Typography>Text</Typography>
            <DatePickerToolbar {...props} />
        </Box>
    )
}
