import { NorthRounded, People, SouthRounded } from "@mui/icons-material";
import { alpha, Box, Card, Theme, Typography } from "@mui/material";
import React from "react";
export type StatCardProps = {
  title?: string;
  value?: string;
  icon?: React.ReactNode;
  color?: (t: Theme) => string;
  description?: string;
  rate?: number;
};
export default function StatCard({
  color = (t) => t.palette.primary.main,
  value = "1000",
  description = "Description placeholder",
  rate = 6.5,
  title = "Title",
  icon = <People />,
}: StatCardProps) {
  return (
    <Card sx={{ p: 2 }}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box
          sx={{
            position: "relative",
            px: 3,
            "&::before": {
              content: "''",
              borderRadius: "2rem",
              position: "absolute",
              height: "100%",
              width: "5px",
              backgroundColor: (t) => color(t),
              left: 0,
            },
          }}
        >
          <Typography fontSize={16} fontWeight={"600"} color="textDisabled">
            {title}
          </Typography>
          <Typography fontSize={28} fontWeight="bold">
            {typeof value === "number" ? Number(value).toFixed(2) : value}
          </Typography>
        </Box>

        <Box
          bgcolor={(t) => alpha(color(t), 0.1)}
          color={(t) => color(t)}
          borderRadius={1}
          p={1}
          sx={{ width: 40, height: 40 }}
        >
          {icon}
        </Box>
      </Box>
      <Box display={"flex"} mt={2}>
        {rate > 0 ? (
          <NorthRounded sx={{ fontSize: 18 }} color="success"></NorthRounded>
        ) : (
          <SouthRounded sx={{ fontSize: 18 }} color="error"></SouthRounded>
        )}
        <Typography
          variant="body2"
          color={rate > 0 ? "success" : "error"}
          mr={1}
          display={"inline"}
        >
          {rate > 0 ? "+" : "-"}
          {Number(rate).toFixed(2)}%
        </Typography>
        <Typography variant="body2" color="textDisabled">
          {description}
        </Typography>
      </Box>
    </Card>
  );
}
