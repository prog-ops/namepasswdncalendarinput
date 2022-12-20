import {PickersActionBarProps} from "@mui/x-date-pickers/PickersActionBar";
import {Button, DialogActions} from "@mui/material";

export const CustomActionBar = (
    {
        onAccept,
        onCancel,
        onClear,
        onSetToday,
    }: PickersActionBarProps) => {

    return (
        <DialogActions
            sx={{
                padding: 0,
                backgroundColor: "#1B1B1B",
            }}>
            <Button onClick={onCancel} sx={{
                textTransform: 'none',
                color: 'white',
                mr: '28px'
            }}>Cancel</Button>
            <Button onClick={onAccept} sx={{
                color: 'white',
                mr: '4px'
            }}>OK</Button>
        </DialogActions>
    );
};
