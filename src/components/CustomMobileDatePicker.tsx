import {colors} from "@mui/material";
import {MobileDatePicker} from "@mui/x-date-pickers";
import {CustomToolbar} from "./CustomToolbar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {CustomActionBar} from "./CustomActionBar";
import {StyledDateTextField} from "./StyledDateTextField";
import * as React from "react";
import {useState} from "react";

export const CustomMobileDatePicker = () => {
    const [value, setValue] = React.useState<Date | null>(new Date());
    const [open, setOpen] = useState<boolean>(false)

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    return (
        <MobileDatePicker
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}

            ToolbarComponent={CustomToolbar}
            // ToolbarComponent={() => <Box >Toolbar Component</Box>}
            // toolbarTitle={<b autoCapitalize='false'>toolbarTitle Text</b>}
            toolbarFormat='MMM, YYYY'
            // toolbarFormat='MMM, YYYY DD'//contoh
            showToolbar={true}
            showDaysOutsideCurrentMonth={true}
            // * Su Mo Tu We Th Fr Sa
            dayOfWeekFormatter={(day) => `${day}`}
            label="Birthday"
            value={value}
            onChange={handleChange}
            //| select dulu (value terset) baru close popper (ketika klik ok action)
            closeOnSelect={false}
            components={{
                LeftArrowIcon: ChevronLeftIcon,
                OpenPickerIcon: CalendarMonthIcon,
                RightArrowIcon: ChevronRightIcon,
                ActionBar: CustomActionBar
            }}
            // componentsProps={{
            //| actionbar disini bisa juga
            /*actionBar: {
                sx: {
                    backgroundColor: "rgb(81,81,81)",
                    borderRadius: "0 0 32px 32px",
                },
                onClick: () => {}
            },*/
            //}}
            //| Do not render open picker button, renders only text field with validation (removes calendar input icon)
            disableOpenPicker
            //| Kalo pake custom/styled text field, ga pake ini
            InputProps={{
                // sx: inputPropsSxProps
                // sx: {
                //     "& .MuiSvgIcon-root": {
                //         color: "gold"
                //     },
                // }
            }}
            renderInput={(params) =>
                <StyledDateTextField
                    {...params}
                    sx={{
                        // width: '335px',//v
                        input: {color: colors.common.white},
                        label: {color: colors.common.white},
                    }}
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => setOpen(true)}
                    InputLabelProps={{shrink: true}}
                />
            }
        />
    )
}
