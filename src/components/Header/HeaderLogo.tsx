import { Box } from "@mui/material";
import { PageUrl } from "configuration/enum";
import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderLogo = () => {
  const navigate = useNavigate();

  return (
    <Box className="header-logo" onClick={() => navigate(PageUrl.ROOT)}>
      <img
        src="https://meu-solutions.com/wp-content/uploads/2020/08/MeU-logo-newest-08-150.png"
        alt="logo"
      />
    </Box>
  );
};

export default HeaderLogo;
