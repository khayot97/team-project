import React from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // login logika
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      {/* Login va rasm konteyneri */}
      <Box sx={{ display: "flex", width: { xs: "90%", md: "700px" }, boxShadow: 3, borderRadius: 2, overflow: "hidden", bgcolor: "#fff" }}>
        
        {/* Chap taraf: Login form */}
        <Paper sx={{ p: 4, flex: 1, boxShadow: "none" }}>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField label="Email" type="email" fullWidth margin="normal" required />
            <TextField label="Password" type="password" fullWidth margin="normal" required />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              Login
            </Button>
          </form>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
        </Paper>

        {/* O‘ng taraf: Rasm yoki rangli blok */}
        <Box sx={{ flex: 1, bgcolor: "#e0f7fa", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img alt="Login Illustration" style={{ maxWidth: "80%", maxHeight: "80%" }} />
        </Box>

      </Box>
    </Box>
  );
};

export default Login;

