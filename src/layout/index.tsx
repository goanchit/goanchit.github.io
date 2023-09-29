import React, { FC, ReactNode } from "react";
import DrawerComponent from "../components/Drawer";
import NotifyToast from "../components/Toast";
import { Container, styled } from "@mui/material";

interface Props {
  children: ReactNode;
}

const Wrapper = styled(Container)({
  position: "relative",
  backgroundColor: "white",
  minHeight: "100vh",
  padding: "3em 0",
});

const Layout: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
        {children}
        <DrawerComponent />
        <NotifyToast />
    </Wrapper>
  );
};

export default Layout;
