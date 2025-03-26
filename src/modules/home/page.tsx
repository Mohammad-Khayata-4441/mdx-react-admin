import { Card, CardContent, CardHeader, Grid2 } from "@mui/material";

export default function Home() {
  return (
    <Grid2 container spacing={1}>
      <Grid2 size={3}>
        <Card>
          <CardHeader title="Stat 1"></CardHeader>
          <CardContent>Stat 1 Content</CardContent>
        </Card>
      </Grid2>
      <Grid2 size={3}>
        <Card>
          <CardHeader title="Stat 1"></CardHeader>
          <CardContent>Stat 1 Content</CardContent>
        </Card>
      </Grid2>
      <Grid2 size={3}>
        <Card>
          <CardHeader title="Stat 1"></CardHeader>
          <CardContent>Stat 1 Content</CardContent>
        </Card>
      </Grid2>
      <Grid2 size={3}>
        <Card>
          <CardHeader title="Stat 1"></CardHeader>
          <CardContent>Stat 1 Content</CardContent>
        </Card>
      </Grid2>
      <Grid2 size={8}>
        <Card>
          <CardHeader title="Stat 1"></CardHeader>
          <CardContent>Stat 1 Content</CardContent>
        </Card>
      </Grid2>
      <Grid2 size={4}>
        <Card>
          <CardHeader title="Stat 1"></CardHeader>
          <CardContent>Stat 1 Content</CardContent>
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
