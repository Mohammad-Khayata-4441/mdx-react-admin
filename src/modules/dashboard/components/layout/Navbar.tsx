import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {
  Avatar,
  Badge,
  Box,
  Paper,
  IconButton,
  Tooltip,
  Typography,
  Slide,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  Container,
  Button,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import React, { useContext } from "react";
import LocaleSelect from "../LocaleSelect";
import { useTranslation } from "react-i18next";
import { ColorModeContext } from "@/modules/common/hooks/useDarkMode";
import {
  DarkMode,
  DarkModeOutlined,
  LightMode,
  LightModeOutlined,
  Notifications,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";
import RouterBreadCumb from "../RouterBreadCumb";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface Props {
  drawerWidth: number;
  drawerOpen: boolean;
  onMobileDrawerOpen: (e: unknown) => void;
  onOpen: (e: unknown) => void;
  title: string;
  // metaData: PageMetaData | undefined;
}
export default function Navbar({ drawerWidth, onMobileDrawerOpen }: Props) {
  const { mode, setMode } = useContext(ColorModeContext);
  const toggle = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const [openSearch, setOpenSearch] = React.useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  interface Props {
    window?: () => Window;
    children: React.ReactElement;
  }

  function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      threshold: 50,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open: drawerOpen }) => ({
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(drawerOpen && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const { t } = useTranslation();
  // const { data } = useUserData();
  return (
    <HideOnScroll>
      <AppBar
        variant="outlined"
        position="sticky"
        color="transparent"
        sx={{ borderLeft: 0, borderTop: 0, borderRadius: 0 }}
      >
        <Paper sx={{ py: 1, borderRadius: 0, border: 0 }} variant="outlined">
          <Container
            // maxWidth={drawerOpen ? "xl" : "3xl"}
            maxWidth={"xl"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={2}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Box
                className="left"
                display={"flex"}
                gap={2}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <IconButton
                  onClick={onMobileDrawerOpen}
                  size="large"
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  sx={{
                    display: {
                      lg: "none",
                    },
                  }}
                >
                  <MenuRoundedIcon />
                </IconButton>

                <Box
                  className="navigation"
                  gap={2}
                  display="flex"
                  flexWrap="wrap"
                  alignItems="center"
                >
                  <Box sx={{ display: { xs: "none", lg: "block" } }}>
                    <RouterBreadCumb></RouterBreadCumb>
                  </Box>
                </Box>
              </Box>

              <Box
                className="right relative"
                flexBasis={{ lg: "50%" }}
                justifyContent="flex-end"
                display="flex"
                alignItems="flex-start"
              >
                <Box
                  sx={{ flexGrow: 0, alignItems: "center", columnGap: 2 }}
                  display={"flex"}
                >
                  <Box
                    sx={{
                      display: {
                        xs: "none",
                        lg: "block",
                      },
                    }}
                  >
                    <LocaleSelect></LocaleSelect>
                  </Box>

                  <Box display="flex" alignItems="center">
                    <IconButton
                      sx={{
                        display: {
                          xs: "none",
                          lg: "flex",
                        },
                      }}
                      onClick={() => toggle()}
                    >
                      {mode === "dark" ? (
                        <LightModeOutlined />
                      ) : (
                        <DarkModeOutlined />
                      )}
                    </IconButton>
                    <IconButton
                    // onClick={() => setOpenSearch(true)}
                    >
                      <Search />
                    </IconButton>

                    {/* Search Dialog */}

                    <IconButton
                      sx={{
                        display: {
                          xs: "none",
                          lg: "flex",
                        },
                      }}
                    >
                      <Badge
                        variant="standard"
                        color="error"
                        badgeContent={5}
                        sx={{ width: "max-content" }}
                      >
                        <NotificationsOutlined></NotificationsOutlined>
                      </Badge>
                    </IconButton>
                  </Box>

                  <Tooltip title={t("ui.profile")}>
                    <Button
                      onClick={handleClick}
                      size="small"
                      color="inherit"
                      sx={{
                        alignItems: "center",
                        gap: 1,
                        cursor: "pointer",
                        display: {
                          xs: "none",
                          lg: "flex",
                        },
                      }}
                    >
                      <Avatar
                        sx={{ height: "35px", width: "35px" }}
                        alt="Remy Sharp"
                      />
                      <Box
                        sx={{
                          display: {
                            xs: "none",
                            lg: "flex",
                          },
                          flexDirection: "column",
                        }}
                      >
                        <Typography textTransform={"capitalize"}>
                          Johne Doe
                        </Typography>
                      </Box>
                    </Button>
                  </Tooltip>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    onClick={handleClose}
                    sx={{
                      "& .MuiMenu-paper": {
                        right: "150px !important",
                        left: "unset !important",
                        top: "35px !important",
                      },
                    }}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        left: 20,
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    // transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                    // anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Avatar /> JohneDoe
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        {/* <AddAccountIcon fontSize={24} /> */}
                      </ListItemIcon>
                      {t("profile.addAnotherAccount")}
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        {/* <SettingsIcon fontSize={24} /> */}
                      </ListItemIcon>
                      {t("settings.title")}
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        // logOut();
                        // handleClose;
                      }}
                    >
                      <ListItemIcon>
                        {/* <LogoutIcon fontSize={24} /> */}
                      </ListItemIcon>
                      {t("logOut")}
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
            </Box>
          </Container>
        </Paper>
      </AppBar>
    </HideOnScroll>
  );
}
