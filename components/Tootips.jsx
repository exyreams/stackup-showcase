/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Tooltip from "@mui/material/Tooltip";
import { Zoom } from "@mui/material";

const Tooltips = ({ title, placement, enterDelay, leaveDelay, children }) => (
  <Tooltip
    title={
      <span className="p-2 font-poppins text-base font-medium">{title}</span>
    }
    arrow
    enterDelay={enterDelay}
    leaveDelay={leaveDelay}
    placement={placement}
    TransitionComponent={Zoom}
    PopperProps={{
      sx: {
        "& .MuiTooltip-tooltip": {
          backgroundColor: "#262626",
        },
        "& .MuiTooltip-arrow": {
          color: "#262626",
        },
      },
    }}
  >
    {children}
  </Tooltip>
);

export default Tooltips;
