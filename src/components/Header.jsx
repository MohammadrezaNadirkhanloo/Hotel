import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Outlet, useNavigate } from "react-router-dom";
import Filter from "./Filter";
import { useAuth } from "./context/AuthProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Header() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const { isAuthen, logout } = useAuth();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    navigate("/Hotel");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    logout();
    navigate("/Hotel");
  };
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Hotel MR
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>Home</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setAnchorElNav(null);
                    navigate("bookmark");
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>Bookmark</Typography>
                </MenuItem>
                {isAuthen ? (
                  <Button onClick={handleOpen}>Filter Hotel</Button>
                ) : (
                  <MenuItem
                    onClick={() => {
                      setAnchorElNav(null);
                      navigate("login");
                    }}
                  >
                    <Typography sx={{ textAlign: "center" }}>Login</Typography>
                  </MenuItem>
                )}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Hotel MR
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
              <Button
                onClick={() => {
                  setAnchorElNav(null);
                  navigate("bookmark");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Bookmark
              </Button>
              {isAuthen ? (
                <Button onClick={handleOpen}>Filter Hotel</Button>
              ) : (
                <Button
                  onClick={() => {
                    setAnchorElNav(null);
                    navigate("login");
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Login
                </Button>
              )}

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Filter />
                </Box>
              </Modal>
            </Box>
            {isAuthen ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : null}
          </Toolbar>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
}
