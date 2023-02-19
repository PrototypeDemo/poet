import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import Logo from "../../Images/logo.png";
import "./AppBar.css";
import "../../CommonStyle/CommonStyle.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Avatar from "@mui/material/Avatar";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";

export default function PrimaryAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [reportsDropDownAnchorEl, setReportsDropDownAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isReportsDropDownOpen = Boolean(reportsDropDownAnchorEl);

  const location2 = useLocation();

  console.log("location2 -> ", location2);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleReportsMenuOpen = (event) => {
    setReportsDropDownAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleReportsDropDownClose = () => {
    setReportsDropDownAnchorEl(null);

  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <NavLink to="/Administration" className="text-black underline-none">
          Administration
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="" className="text-black underline-none">
          Profile
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/Login" className="text-black underline-none">
          Sign Out
        </NavLink>
      </MenuItem>
    </Menu>
  );

const reportsDropDownId ="reports-drop-down";
  const reportsRenderDropDown = (
    <Menu
      anchorEl={reportsDropDownAnchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      id={reportsDropDownId}
      keepMounted
      open={isReportsDropDownOpen}
      onClose={handleReportsDropDownClose}
    >
      <MenuItem>
        <NavLink
          to="/ReportsLoanMortageOrCreditCard"
          className="text-black underline-none"
        >
          Apply for a Loan, Mortgage, or Credit Card
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="" className="text-black underline-none">
          Product Complaint
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="" className="text-black underline-none">
          Purchase Products & Services
        </NavLink>
        </MenuItem>
      <MenuItem>
        <NavLink to="" className="text-black underline-none">
          Receive Targeted Communications & Offers
        </NavLink>
        </MenuItem>
      <MenuItem>
        <NavLink to="" className="text-black underline-none">
          Schedule Service Appointment
        </NavLink>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          {/* <Badge badgeContent={4} color="error"> */}
          <NotificationsOutlinedIcon />
          {/* </Badge> */}
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          {/* <Badge badgeContent={17} color="error"> */}
          <HelpOutlineOutlinedIcon />
          {/* </Badge> */}
        </IconButton>
        <p>Help</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar sx={{ bgcolor: "#2C0052" }}>LP</Avatar>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar className="app-bar">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MoreVertOutlinedIcon />
          </IconButton>
          <img src={Logo} className="app-bar-logo" alt="CSG Xponent Logo" />

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              mx: 6,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link
              sx={{ mx: 3, my: 2, display: "block" }}
              variant={"body"}
              color={"secondary"}
              underline={"none"}
              href="/JourneyLibrary"
              className={`${
                location2.pathname === "/JourneyLibrary"
                  ? "item-active"
                  : "nav-item"
              }`}
            >
              Libraries
            </Link>
            {/* <Link
                sx={{ mx: 3, my: 2, display: "block" }}
                variant={"body"}
                color={"secondary"}
                underline={"none"}
                className="nav-item"
              >
                Simulations
              </Link> */}
            <Link
              sx={{ mx: 3, my: 2, display: "block" }}
              variant={"body"}
              color={"secondary"}
              underline={"none"}
              href="/Deployments"
              className={`${
                location2.pathname === "/Deployments"
                  ? "item-active"
                  : "nav-item"
              }`}
            >
              Deployments
            </Link>
            <Button
              sx={{ mx: 3, my: 2, display: "block" }}
              disableRipple
              variant="text"
              color={"secondary"}
              underline={"none"}
              onClick={handleReportsMenuOpen}
              className={`${
                location2.pathname === "/LoanMortageOrCreditCard" ? "item-active" : "nav-item"
              } reports-menu`}
            >
              Reports
            </Button>
            <Link
              sx={{ mx: 3, my: 2, display: "block" }}
              variant={"body"}
              color={"secondary"}
              underline={"none"}
              href="/ConnectionAndChannels"
              className={`${
                location2.pathname === "/ConnectionAndChannels"
                  ? "item-active"
                  : "nav-item"
              }`}
            >
              Connectors
            </Link>
          </Box>

          <Box
            sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}
          >
            <IconButton
              className="appbar-action-btns"
              size="small"
              // aria-label="show 4 new mails"
              color="inherit"
            >
              {/* <Badge badgeContent={4} color="error"> */}
              <NotificationsOutlinedIcon fontSize="inherit" />
              {/* </Badge> */}
            </IconButton>
            <IconButton
              className="appbar-action-btns"
              size="small"
              // aria-label="show 17 new notifications"
              color="inherit"
            >
              {/* <Badge badgeContent={17} color="error"> */}
              <HelpOutlineOutlinedIcon fontSize="inherit" />
              {/* </Badge> */}
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar sx={{ bgcolor: "#2C0052", width: 32, height: 32 }}>
                <span className="username-shortcut-txt">LP</span>
              </Avatar>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {reportsRenderDropDown}
    </Box>
  );
}
