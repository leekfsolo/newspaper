import React, { useEffect, useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import Sidenav from "../Sidenav";
import { Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getCategories } from "./headerSlice";
import { handleLoading } from "app/globalSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const headerRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { data: categoryData } = useAppSelector((state) => state.header);

  useEffect(() => {
    dispatch(handleLoading(true));

    try {
      const fetchData = async () => {
        await dispatch(getCategories());
      };

      fetchData();
    } catch (err) {
      console.error("ERROR: ", err);
    } finally {
      dispatch(handleLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }} className="header">
      <AppBar
        component="nav"
        position="sticky"
        sx={{ background: "transparent", overflow: "hidden" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#000",
          }}
          className="header-toolbar"
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
            className="header-toolbar__iconDrawer"
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ gap: 2 }}
            ref={headerRef}
            className="header-toolbar__navbar"
          >
            <Button sx={{ padding: 0, minWidth: "auto", color: "#000" }}>
              <HomeIcon />
            </Button>
            <Box
              className="header-list"
              component="ul"
              sx={{
                gap: 2,
                margin: 0,
                padding: 0,
                listStyleType: "none",
                alignItems: "center",
              }}
            >
              {categoryData.map((item) => (
                <Box
                  component="li"
                  key={item.id}
                  sx={{
                    color: "#000",
                    fontWeight: 700,
                    padding: 0,
                    minWidth: "auto",
                    cursor: "pointer",
                  }}
                  className="header-list__item"
                >
                  {item.label}
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                padding: 0,
                minWidth: "auto",
                color: "#999",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={handleDrawerToggle}
              className="navbar-readAll"
            >
              <Typography
                sx={{ fontSize: 13, marginRight: "5px", fontWeight: 700 }}
              >
                Tất cả
              </Typography>
              <MenuIcon sx={{ fontSize: 17 }} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Sidenav
        handleDrawerToggle={handleDrawerToggle}
        navItems={categoryData}
        mobileOpen={mobileOpen}
      />
    </Box>
  );
}
