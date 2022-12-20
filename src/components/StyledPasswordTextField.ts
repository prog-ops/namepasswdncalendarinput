import {colors, styled, TextField} from "@mui/material";

export const StyledPasswordTextField = styled(TextField)({
    "& .MuiInputLabel-root": {
        color: colors.common.white,
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: colors.common.white
    },
    "& .MuiOutlinedInput-root": {
        "& > fieldset": {
            borderColor: colors.common.white,
            borderWidth: '2px',
            borderRadius: '8px'
        },
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
            borderColor: "primary.main",
            borderWidth: '3px',
            borderRadius: '8px'
        }
    },
    "& .MuiOutlinedInput-root:hover": {
        "& > fieldset": {
            borderColor: colors.common.white,
            borderWidth: '3px',
            borderRadius: '8px'
        },
    },
    "& .MuiOutlinedInput-input": {
        color: colors.common.white
    },
    '& label.Mui-focused': {
        color: 'primary.main',
        borderWidth: '3px',
    },
});
