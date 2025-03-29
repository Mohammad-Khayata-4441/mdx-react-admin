import { Card, CardContent, CardHeader, Grid2 } from "@mui/material";
import StatCard from "../dashboard/components/widgets/StatCard";
import TickPlacementBars from "../dashboard/components/widgets/charts-demos/Bars";
import BasicLineChart from "../dashboard/components/widgets/charts-demos/Line";

export default function Home() {
  return (
    <Grid2 container spacing={1}>
      *
      <Grid2 container size={12} position={"relative"} spacing={1}>
        {/* <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
          <img src="/images/bg/1.jpg" />
        </Box> */}
        <Grid2 size={{ xs: 12, md: 6, lg: 3, xl: 3 }}>
          <StatCard></StatCard>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6, lg: 3, xl: 3 }}>
          <StatCard></StatCard>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6, lg: 3, xl: 3 }}>
          <StatCard></StatCard>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6, lg: 3, xl: 3 }}>
          <StatCard></StatCard>
        </Grid2>
      </Grid2>
      <Grid2 size={7}>
        <Card>
          <CardHeader title="Monthly Rainfall"></CardHeader>
          <CardContent>
            <TickPlacementBars />
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 size={5}>
        <Card>
          <CardHeader title="Line Chart "></CardHeader>
          <CardContent>
            <BasicLineChart />
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 size={8} container spacing={2}>
        <Grid2 size={6}>
          <Card>
            <CardHeader title="Stat 1"></CardHeader>
            <CardContent>Stat 1 Content</CardContent>
          </Card>
        </Grid2>
        <Grid2 size={6}>
          <Card>
            <CardHeader title="Stat 1"></CardHeader>
            <CardContent>Stat 1 Content</CardContent>
          </Card>
        </Grid2>
        <Grid2 size={6}>
          <Card>
            <CardHeader title="Stat 1"></CardHeader>
            <CardContent>Stat 1 Content</CardContent>
          </Card>
        </Grid2>
        <Grid2 size={6}>
          <Card>
            <CardHeader title="Stat 1"></CardHeader>
            <CardContent>Stat 1 Content</CardContent>
          </Card>
        </Grid2>
      </Grid2>
      <Grid2 size={4}>
        <Card sx={{ height: "100%" }}>
          <CardHeader title="Stat 1"></CardHeader>
          <CardContent>Stat 1 Content</CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
}
