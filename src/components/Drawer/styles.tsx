import { Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

export const StyledButton = styled(Button)({
   background: "#e0cd72",
   color:"black",
   position: "fixed",
   top: "50%",
   transformOrigin: "50% 100%",
   transform: "translateX(-50%) rotate(90deg)",
   left: 0,
   "&:hover": {
      opacity: '80%',
      background: "#e0cd72",
   }
});

export const CustomGridItem = styled(Grid)({
   display: "flex",
   justifyContent: "center",
 });