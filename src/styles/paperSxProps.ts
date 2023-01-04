import {SxProps} from "@mui/system";
import {colors} from "@mui/material";

export const PaperSxProps: SxProps = {
  "& .MuiPickersCalendarHeader-root": {
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: 'space-evenly',
    // mb: '18px'
  },
  "& .MuiPickersCalendarHeader-root:first-child": {
    order: 0,
    paddingRight: "20px",
    paddingLeft: "20px"
  },
  // January 2023 between arrows
  "& .css-dplwbx-MuiPickersCalendarHeader-label": {
    textAlign: "center",
    // background: 'green',
    // display: "flex",
    // position: "fixed",
    // paddingLeft: "100px",
  },
  "& .MuiPickersArrowSwitcher-root": {
    display: "inline-flex",
    // mt: '24px'
  },
  "& .MuiPickersCalendarHeader-labelContainer": {
    color: colors.common.white,
  },
  "& .MuiPickersCalendarHeader-switchViewButton": {
    display: 'none',
  },
  "& .MuiPickersArrowSwitcher-spacer": {
    // width: "120px",
    width: "220px",
    marginLeft: 0.5,
    marginRight: 0.5
  },
  "& .css-31ca4x-MuiPickersFadeTransitionGroup-root": {
    display: "flex",
    position: "fixed",
    paddingLeft: "100px"
  },
  // "& .css-9reuh9-MuiPickersArrowSwitcher-root": {
  //     marginLeft: "-2px"
  // },
  "& .MuiPickersArrowSwitcher-button": {
    paddingRight: "7px",
    color: colors.common.white
  },
}
