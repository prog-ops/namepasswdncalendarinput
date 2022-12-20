import {colors, styled, TextField} from "@mui/material";

export const StyledDateTextField = styled(TextField)({
    width: 335,
    "& .MuiInputBase-root": {
        height: 58
    },
    '& label.Mui-focused': {
        color: colors.common.white,
    },
    '& .MuiInput-underline:after': {
        borderColor: colors.common.white,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: colors.grey[700],
            borderWidth: 3.2,
            borderRadius: 8
        },
        '&:hover fieldset': {
            borderColor: colors.grey[600],
        },
        '&.Mui-focused fieldset': {
            borderColor: colors.common.white,
        },
    },
});
