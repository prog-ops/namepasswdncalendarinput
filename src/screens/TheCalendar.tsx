import * as React from "react";
// import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';//v before
import AdapterDayjs from '@date-io/dayjs';
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Box, Button, colors, Typography} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {popperSxProps} from "../styles/popperSxProps";
import {CustomActionBar} from "../components/CustomActionBar";
import {DatePickerToolbar} from "@mui/x-date-pickers/DatePicker/DatePickerToolbar";
import {BaseToolbarProps} from "@mui/x-date-pickers/internals";
import {useState} from "react";
import {StyledDateTextField} from "../components/StyledDateTextField";
import {CustomToolbar} from "../components/CustomToolbar";

export default function TheCalendar() {
    const [value, setValue] = React.useState<Date | null>(new Date());
    const [open, setOpen] = useState<boolean>(false)

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    return (
        // <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box>
                <DatePicker
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}

                    ToolbarComponent={CustomToolbar}
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
                    PaperProps={{
                        sx: {
                            "& .MuiPickersDay-root": {
                                "&.Mui-selected": {
                                    backgroundColor: 'primary.light',
                                },
                            },
                        }
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
