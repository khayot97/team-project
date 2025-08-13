import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../../../css/navbar.css";

const languages = [
  "English", "Uzbek", "Russian", "French", "German", "Spanish",
  "Chinese", "Japanese", "Korean", "Arabic", "Hindi", "Portuguese",
  "Italian", "Turkish", "Dutch", "Swedish"
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("English");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setLanguage(event.target.value);
    // Til o'zgarishi bilan bog'liq kod shu yerda
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff", boxShadow: "none", borderBottom: "1px solid #e0e0e0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Chap taraf: Logo */}
        <Typography
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "#000", fontWeight: "bold", fontSize: "1.2rem" }}
        >
          PDF Tools
        </Typography>

        {/* Nav tugmalar */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button component={Link} to="/merge-pdf" sx={{ color: "#000", textTransform: "none" }}>MERGE PDF</Button>
          <Button component={Link} to="/split-pdf" sx={{ color: "#000", textTransform: "none" }}>SPLIT PDF</Button>
          <Button component={Link} to="/compress-pdf" sx={{ color: "#000", textTransform: "none" }}>COMPRESS PDF</Button>
          <Button component={Link} to="/convert-pdf" sx={{ color: "#000", textTransform: "none" }}>CONVERT PDF</Button>
          <Button component={Link} to="/allpdf-tools" sx={{ color: "#000", textTransform: "none" }}>ALLPDF TOOLS</Button>
        </Box>

        {/* O‘ng taraf: Language + Login / Sign Up */}
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          {/* Til select */}
          <Select
            value={language}
            onChange={handleChange}
            size="small"
            sx={{ minWidth: 100 }}
          >
            {languages.map((lang) => (
              <MenuItem key={lang} value={lang}>{lang}</MenuItem>
            ))}
          </Select>

          <Button
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none" }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

