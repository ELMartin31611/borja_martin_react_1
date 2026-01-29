import React from "react";
import { Card, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material";
import type { usuario } from "../../types/usuario";

export default function ProductCard({ Usuario }: { Usuario: usuario }) {
  return (
    <Card sx={{ borderRadius: 3, height: "100%" }}>
      <CardMedia
        component="img"
        height="160"
        image={Usuario.url_image}
        alt={Usuario.name}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            "https://via.placeholder.com/640x360?text=No+Image";
        }}
      />

      <CardContent>
        <Typography variant="subtitle1" fontWeight={800}>
          {Usuario.name}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {Usuario.category_name} • Stock: {Usuario.stock}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Chip
            label={Usuario.is_active ? "ACTIVE" : "INACTIVE"}
            color={Usuario.is_active ? "success" : "default"}
            size="small"
          />
          <Typography variant="h6" fontWeight={900}>${Usuario.price}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}