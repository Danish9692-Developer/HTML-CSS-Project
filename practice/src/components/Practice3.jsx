import { Grid, Card, Typography } from "@mui/material";

export default function Practice3() {
 return (
  <Grid container spacing={2}>
   <Grid item xs={12} md={6}>
    <Card sx={{ p: 2 }}>
     <Typography>Left Section</Typography>
    </Card>
   </Grid>

   <Grid item xs={12} md={6}>
    <Card sx={{ p: 2 }}>
     <Typography>Right Section</Typography>
    </Card>
   </Grid>
  </Grid>
 );
}
