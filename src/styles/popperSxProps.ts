import {SxProps} from "@mui/system";
import {colors} from "@mui/material";

export const popperSxProps: SxProps = {
    width: 320,
    "& .MuiPaper-root": {
        boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.3)',
        marginTop: 2,
        backgroundColor: "#1B1B1B",
        borderRadius: "10px",
        height: 435,
        color: colors.common.white,
    },
    "& .MuiPickersToolbar-root": {
        padding: 0,
        marginTop: '5px',
        "& .MuiTypography-root": {
            color: colors.common.white,
        },
        "& .MuiTypography-overline": {
            display: 'none',
            fontVariantCaps: 'all-small-caps',
        },
        "& .MuiPickersToolbar-penIconButton": {
            visibility: "hidden",
        },
    },
    "& .MuiCalendarOrClockPicker-root": {
    },
    "& .MuiCalendarPicker-root": {
        backgroundColor: "#1B1B1B",
    },
    // "& .MuiYearPicker-root": {
    // },
    "& .PrivatePickersSlideTransition-root": {
        minHeight: '200px'
    },


    //- Header = December 2022, arrows
    "& .MuiPickersCalendarHeader-root": {
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: 'space-evenly'
    },
    "& .MuiPickersCalendarHeader-root:first-child": {
        order: 0,
        paddingRight: "20px",
        paddingLeft: "20px"
    },
    "& .MuiPickersArrowSwitcher-root": {
        display: "inline-flex",
    },
    "& .MuiPickersCalendarHeader-label": {
        textAlign: "center"
    },
    "& .MuiPickersCalendarHeader-labelContainer": {
        color: colors.common.white,
    },
    "& .MuiPickersArrowSwitcher-spacer": {
        width: "220px",
        marginLeft: 0.5,
        marginRight: 0.5
    },
    "& .css-31ca4x-MuiPickersFadeTransitionGroup-root": {
        display: "flex",
        position: "fixed",
        // position: "absolute",
        paddingLeft: "80px"
    },
    "& .css-9reuh9-MuiPickersArrowSwitcher-root": {
        marginLeft: "-2px"
    },
    "& .MuiPickersArrowSwitcher-button": {
        paddingRight: "7px",
        color: colors.common.white
    },


    //- bagian S M T W T F S
    "& .MuiDayPicker-header": {
        "& .MuiTypography-root": {
            color: colors.grey[500],
        }
    },


    "& .MuiButtonBase-root.MuiPickersDay-today": {
        color: colors.common.white,
        border: '1.4px solid',
        borderColor: 'primary.light',

    },
    "& .MuiPickersDay-root": {
        "&.Mui-selected": {
            backgroundColor: 'primary.light',
        },
    },
    "& .MuiPickersDay-dayWithMargin": {
        color: colors.common.white,
        backgroundColor: "#1B1B1B",
    },
    "& .MuiPickersDay-dayWithMargin:hover": {
        color: colors.common.black,
        backgroundColor: colors.common.white,
    },
    "& .Mui-selected MuiPickersDay-dayWithMargin": {
        color: colors.common.white,
    },
    "& .MuiPickersDay-today": {
        borderColor: 'primary'
    },
    "& .MuiPickersDay-dayOutsideMonth": {
        color: colors.grey[500],
    },

    //| inside MuiYearPicker-root
    "& .PrivatePickersYear-yearButton":{
        borderRadius: '2px',
        height: '28px'
    },
    "& .Mui-selected .PrivatePickersYear-yearButton":{
        borderRadius: '2px',
        height: '28px'
    },
    "& .PrivatePickersYear-yearButton:hover":{
        color: colors.common.black,
        backgroundColor: colors.common.white,
        borderRadius: '0px',
    },


    "& ..MuiDialogActions-root": {
    },
    "& .MuiDialogActions-spacing": {
        paddingRight: '25px',
    },
};
