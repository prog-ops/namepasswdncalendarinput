import {SxProps} from "@mui/system";
import {colors} from "@mui/material";

export const PaperSxProps: SxProps = {
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
    textAlign: "center",
    // position: "fixed",
    // paddingLeft: "90px",
  },
  "& .MuiPickersCalendarHeader-labelContainer": {
    color: colors.common.white,
  },
  "& .MuiPickersArrowSwitcher-spacer": {
    width: "220px",
    marginLeft: 0.5,
    marginRight: 0.5
  },
  // January 2023 between arrows
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
