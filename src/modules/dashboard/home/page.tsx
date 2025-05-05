import Grid from "@mui/material/Grid";
import StatCard2, { StatCardProps } from "./components/StatCard2";
import SessionsChart from "./components/SessionsChart";
import PageViewsBarChart from "./components/PageViewsBarChart";
import { Card, CardContent, Typography } from "@mui/material";
import CustomizedDataGrid from "./components/CustomizedDataGrid";
import CustomizedTreeView from "./components/CustomizedTreeView";
import ChartUserByCountry from "./components/ChartUserByCountry";
export default function Home() {
  const data: StatCardProps[] = [
    {
      title: "Users",
      value: "14k",
      interval: "Last 30 days",
      trend: "up",
      data: [
        200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360,
        340, 380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600,
        880, 920,
      ],
    },
    {
      title: "Conversions",
      value: "325",
      interval: "Last 30 days",
      trend: "down",
      data: [
        1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840,
        600, 820, 780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400,
        360, 300, 220,
      ],
    },
    {
      title: "Event count",
      value: "200k",
      interval: "Last 30 days",
      trend: "neutral",
      data: [
        500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620,
        510, 530, 520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430,
        520, 510,
      ],
    },
    {
      title: "Revenue",
      value: "52k",
      interval: "Last 30 days",
      trend: "up",
      data: [
        2100, 2300, 2200, 2400, 2600, 2800, 2750, 2900, 3100, 3300, 3200, 3400,
        3600, 3800, 3700, 3900, 4100, 4300, 4200, 4400, 4600, 4800, 4700, 4900,
        5100, 5300, 5200, 5400, 5600, 5800,
      ],
    },
  ];
  return (
    <Grid container spacing={1}>
      {data.map((card, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard2 {...card} />
        </Grid>
      ))}

      <Grid size={{ xs: 12, md: 6 }}>
        <SessionsChart />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <PageViewsBarChart />
      </Grid>

      <Grid size={12}>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
          Details
        </Typography>
      </Grid>
      <Grid size={{ xs: 9 }}>
        <Card>
          <CardContent>
            <CustomizedDataGrid />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, lg: 3 }}>
        <CustomizedTreeView />
        <ChartUserByCountry />
      </Grid>
    </Grid>
  );
}
