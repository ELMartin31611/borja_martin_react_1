import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import type { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
            Mi Aplicación
          </Typography>
          <Box>
            <Button color="inherit" sx={{ color: "white" }}>
              Home
            </Button>
            <Button color="inherit" sx={{ color: "white" }}>
              Bono
            </Button>
            <Button color="inherit" sx={{ color: "white" }}>
              Sueldo
            </Button>
            <Button color="inherit" sx={{ color: "white" }}>
              Usuario
            </Button>
            <Button color="inherit" sx={{ color: "white" }}>
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <div className="app-shell">{children}</div>
    </>
  );
}