import React, { useContext, useEffect, useState } from "react";
import { StyledButton, CustomGridItem } from "./styles";
import { Box, Drawer, Grid, Stack } from "@mui/material";
import { GlobalDispatchContext } from '../../context/globalContextProvider';
import { DrawerItem } from "../SidebarDrawer";
import { ContactInfo, ContactInfoProps, DrawerListItems, DrawerListItemsProps } from "../../constants/constants";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

const DrawerData = () => {
  const dispatch = useContext(GlobalDispatchContext);

  const HandleIconClick = (iconClicked: string) => {
    switch (iconClicked) {
      case "LinkedIn":
        window.open("https://www.linkedin.com/in/anchitdhar/");
        break;
      case "GitHub":
        window.open("https://github.com/goanchit");
        break;
      case "Email":
        navigator.clipboard.writeText("anchitdhar1@gmail.com")
        dispatch({ type: "SHOW_TOAST", payload: { toast: { message: "My Email Has Been Copied To Your Clipboard 😀. Just shoot🚀 an email✉️ and say hi.", show: true } } })
        break;
      default:
        console.log("NOTHING");
    }
  };

  return (
    <Box sx={{ width: 300, height: "100%" }}>
      <Stack spacing={2} justifyContent={'flex-end'} sx={{ height: '100%' }}>
      <Box sx={{ height: "10%" }}></Box>
        <Box sx={{ height: "90%", display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center' }}>
          {
            DrawerListItems.map((row: DrawerListItemsProps) => {
              return (<DrawerItem rowLink={row.Link} rowName={row.Name} />)
            })
          }
        </Box>
        <Box>
        <Grid
          container
          sx={{ justifyContent: "center", alignContent: "end" }}
        >
          <CustomGridItem item xs={12}>
            <h4 style={{ textAlign: "center" }}>Reach Out To Me</h4>
          </CustomGridItem>
          {/* {
            ContactInfo.map((item: ContactInfoProps) => {
              return (
                <CustomGridItem item xs={4}>
                  <item.Icon size={50} onClick={() => HandleIconClick(item.Name, item.Link)} />
                </CustomGridItem>
              )
            })
          } */}
          <CustomGridItem item xs={4}>
            <AiFillLinkedin
              size={50}
              onClick={() => HandleIconClick("LinkedIn")}
            />
          </CustomGridItem>
          <CustomGridItem item xs={4}>
            <AiFillGithub size={50} onClick={() => HandleIconClick("GitHub")} />
          </CustomGridItem>
          <CustomGridItem item xs={4}>
            <AiOutlineMail size={50} onClick={() => HandleIconClick("Email")} />
          </CustomGridItem>
        </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <StyledButton
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => setOpenDrawer(!openDrawer)}
    >
      Details
      <Drawer anchor="left" open={openDrawer}>
        <DrawerData />
      </Drawer>
    </StyledButton>
  );
};

export default DrawerComponent;
