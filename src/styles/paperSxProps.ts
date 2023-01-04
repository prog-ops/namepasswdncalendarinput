import {SxProps} from "@mui/system";
import {colors} from "@mui/material";

export const PaperSxProps: SxProps = {
  "& .MuiPickersCalendarHeader-root": {
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: 'space-evenly',
    position: 'relative',
    mt: '20px'
  },
  // "& .MuiPickersCalendarHeader-root:first-child": {
  //   order: 0,
  //   paddingRight: "20px",
  //   paddingLeft: "20px"
  // },
  // // "& .MuiPickersArrowSwitcher-root:first-child": {
  // //   order: 0,
  // // },
  // // January 2023 between arrows
  // "& .css-dplwbx-MuiPickersCalendarHeader-label": {
  "& .MuiPickersCalendarHeader-label": {
    textAlign: "center",
    // background: 'green',
    display: "flex",
    // position: "fixed",
    //! this is uncommented to fit live hosting
    // paddingLeft: "100px",
    fontSize: '14px',
    //! this is uncommented to fit live hosting
    mb: '20px'
  },
  "& .MuiPickersCalendarHeader-labelContainer": {
    // order: 1,
    color: colors.common.white,
    // position: "absolute",
    paddingLeft: "100px",
  },
  "& .MuiPickersArrowSwitcher-root": {
    display: "inline-flex",
    position: "absolute",
    mt: '10px'
  },
  "& .MuiPickersCalendarHeader-switchViewButton": {
    display: 'none',
  },
  "& .MuiPickersArrowSwitcher-spacer": {
    width: "220px",
    marginLeft: 0.5,
    marginRight: 0.5,
  },
  "& .css-31ca4x-MuiPickersFadeTransitionGroup-root": {
    display: "flex",
    position: "absolute",
    // paddingLeft: "100px",
    // mb: '24px',
    mt: '15px',
  },
  // "& .css-9reuh9-MuiPickersArrowSwitcher-root": {
  //     marginLeft: "-2px"
  // },
  "& .MuiPickersArrowSwitcher-button": {
    paddingRight: "15px",
    color: colors.common.white
  },
  "& .MuiIconButton-edgeStart": {
    // ml: '5px'
  },
}
