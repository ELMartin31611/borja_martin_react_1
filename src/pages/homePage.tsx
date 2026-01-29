import React from "react";
import { Box, Typography, Button, Card, CardContent, Grid } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage: React.FC = () => {
  const carouselItems = [
    { title: "Bienvenido a la App", description: "Explora las funcionalidades" },
    { title: "Calcula tu sueldo", description: "Herramientas útiles para ti" },
    { title: "Regístrate ahora", description: "Únete a nuestra comunidad" },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Bienvenido a la AppShell
      </Typography>

      <Carousel>
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: 200,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              padding: 2,
            }}
          >
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body1">{item.description}</Typography>
          </Box>
        ))}
      </Carousel>

      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        <Grid size={{xs:12, sm:6}} >
          <Card>
            <CardContent>
              <Typography variant="h6">Funcionalidad 1</Typography>
              <Typography variant="body2">
                Descripción de la funcionalidad 1.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{xs:12, sm:6}} >
          <Card>
            <CardContent>
              <Typography variant="h6">Funcionalidad 2</Typography>
              <Typography variant="body2">
                Descripción de la funcionalidad 2.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 4, textAlign: "center" }}>
        <Button variant="contained" color="primary">
          Comenzar
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;