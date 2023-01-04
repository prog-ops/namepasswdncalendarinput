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
        "&.Mui-selected": {
            backgroundColor: 'primary.light',
        },
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
        height: '28px',
        m: '16px 0 16px 0',
        "& .Mui-selected": {
            bgcolor: 'primary.light',
        },
    },
    "& .Mui-selected .PrivatePickersYear-yearButton":{
        borderRadius: '2px',
        bgcolor: 'primary.light',
        height: '28px'
    },
    "& .PrivatePickersYear-yearButton:hover":{
        color: colors.common.black,
        backgroundColor: colors.common.white,
        borderRadius: '0px',
    },
    "& .Mui-selected.css-3eghsz-PrivatePickersYear-button":{
        bgcolor: 'primary.light',
    },


    "& ..MuiDialogActions-root": {
    },
    "& .MuiDialogActions-spacing": {
        paddingRight: '25px',
    },
};
