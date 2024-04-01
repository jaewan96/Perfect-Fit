import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type ToggleType = {
  camera : boolean
  setCamera : Dispatch<SetStateAction<boolean>>
}


const Toggle = (props:ToggleType) => {
  const { camera, setCamera } = props
  // const [checked, setChecked] = useState<boolean>(false);
  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
      },
      "&::before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      "&::after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2,
    },
  }));
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCamera(e.target.checked);
  };
  return (
    <div>
      <Stack direction="row" spacing={1} alignItems="center">
        <img src="/public/icon/camera.png"/>
        <Android12Switch
          checked={camera}
          onChange={handleChange}
          defaultChecked
        />
        {/* <FormControlLabel
          control={
          }
        /> */}
      </Stack>
    </div>
  );
};

export default Toggle;
