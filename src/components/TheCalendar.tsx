import * as React from "react";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Box, Button, colors, Typography} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {popperSxProps} from "../styles/popperSxProps";
import {CustomActionBar} from "./CustomActionBar";
import {DatePickerToolbar} from "@mui/x-date-pickers/DatePicker/DatePickerToolbar";
import {BaseToolbarProps} from "@mui/x-date-pickers/internals";
import {useState} from "react";
import {StyledDateTextField} from "./StyledDateTextField";

export default function TheCalendar() {
    const [value, setValue] = React.useState<Date | null>(new Date());
    const [open, setOpen] = useState<boolean>(false)

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    const customToolbar = (props: BaseToolbarProps<Date, Date | null>) => {
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

    return (
        // <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box>
                <DatePicker
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}

                    ToolbarComponent={customToolbar}
                    toolbarFormat='MMM, YYYY'
                    showToolbar={true}
                    showDaysOutsideCurrentMonth={true}
                    // * Su Mo Tu We Th Fr Sa
                    dayOfWeekFormatter={(day) => `${day}`}
                    label="Birthday"
                    value={value}
                    onChange={handleChange}
                    closeOnSelect={false}
                    components={{
                        LeftArrowIcon: ChevronLeftIcon,
                        OpenPickerIcon: CalendarMonthIcon,
                        RightArrowIcon: ChevronRightIcon,
                        ActionBar: CustomActionBar
                    }}
                    disableOpenPicker
                    InputProps={{
                    }}
                    PopperProps={{sx: popperSxProps}}
                    renderInput={(params) =>
                        <StyledDateTextField
                            {...params}
                            sx={{
                                input: {color: colors.common.white},
                                label: {color: colors.common.white},
                            }}
                            onClick={(e: React.MouseEvent<HTMLDivElement>) => setOpen(true)}
                            InputLabelProps={{shrink:true}}
                        />
                    }
                />
            </Box>
        </LocalizationProvider>
        // </>
    );
}
