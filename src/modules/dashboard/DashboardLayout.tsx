import * as React from "react";
import { Box, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "./components/layout/Navbar";
import DrawerSidebar from "./components/layout/Drawer";
// import { ErrorElement } from "../components/ErrorElement";
import { useLocalStorage } from "usehooks-ts";
import RouterBreadCumb from "./components/RouterBreadCumb";
// import { useNetworkState } from "../hooks/useNetworkState";
// import { QueryParamProvider } from "use-query-params";
// import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
// import ErrorBoundary from "../components/ErrorBoundary";
// import ConnectionError from "../components/ConnectionError";

const drawerFullWidth = 240;
const miniSizedDrawerWidth = 80;

const DashboardLayout = (props: React.PropsWithChildren) => {
  const [open, setOpen] = useLocalStorage("drawer", false);
  const [isMobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  const drawerWidth = React.useMemo(
    () => (open ? drawerFullWidth : miniSizedDrawerWidth),
    [open]
  );
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  return (
    <Box
      id="dashboard-layout"
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        transition: "0.3s",
        position: "relative",
        flexDirection: "column",
        width: { xs: "100%", lg: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, lg: drawerWidth + "px" },
      }}
    >
      <CssBaseline />
      <Navbar
        title="Dashboard"
        onMobileDrawerOpen={() => setMobileDrawerOpen(true)}
        drawerOpen={open}
        drawerWidth={drawerWidth}
        onOpen={handleDrawerOpen}
      />
      <DrawerSidebar
        drawerFullWidth={drawerFullWidth}
        miniSizedDrawerWidth={miniSizedDrawerWidth}
        open={open}
        setOpen={(value) => setOpen(value)}
        mobileDrawerOpen={isMobileDrawerOpen}
        setMobileDrawerOpen={(value) => setMobileDrawerOpen(value)}
      />

      <Box
        id="dashboard-main"
        component="main"
        sx={{
          overflow: "auto",
          flexGrow: 1,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          pb: 2,
          pt: { xs: 0, lg: 2 },
        }}
      >
        <Container maxWidth="xl">
          {/* <QueryParamProvider adapter={ReactRouter6Adapter}>
            <ErrorBoundary fallbackComponent={ErrorElement}> */}
          {/* {isOnline ? */}
          <Box py={2} display={{ lg: "none" }}>
            <RouterBreadCumb></RouterBreadCumb>
          </Box>
          <Box>{props.children}</Box>
          {/* : <ConnectionError />} */}
          {/* </ErrorBoundary>
          </QueryParamProvider> */}
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
