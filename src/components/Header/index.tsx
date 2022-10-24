import React, { useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import Sidenav from "../Sidenav";
import { Typography } from "@mui/material";

const navItems = [
  "Media",
  "thời sự",
  "thế giới",
  "pháp luật",
  "kinh doanh",
  "công nghệ",
  "xe",
  "du lịch",
  "nhịp sống trẻ",
  "văn hóa",
  "giải trí",
  "thể thao",
  "giáo dục",
  "khoa học",
  "sức khỏe",
  "giả - thật",
  "bạn đọc",
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

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
              }}
            >
              {navItems.map((item) => (
                <Box
                  component="li"
                  key={item}
                  sx={{
                    color: "#000",
                    fontWeight: 700,
                    padding: 0,
                    minWidth: "auto",
                    cursor: "pointer",
                  }}
                  className="header-list__item"
                >
                  {item}
                </Box>
              ))}
            </Box>
            <Button
              sx={{ padding: 0, minWidth: "auto", color: "#999" }}
              onClick={handleDrawerToggle}
            >
              <Typography sx={{ fontSize: 13, marginRight: "5px" }}>
                Tất cả
              </Typography>
              <MenuIcon sx={{ fontSize: 17 }} />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Sidenav
        handleDrawerToggle={handleDrawerToggle}
        navItems={navItems}
        mobileOpen={mobileOpen}
      />
    </Box>
  );
}
