import { Card, TextField, Button, Stack } from "@mui/material";

export default function Practice2() {
 return (
  <Card sx={{ p: 3, maxWidth: 400 }}>
   <Stack spacing={2}>
    <TextField label="Institute Name" />
    <TextField label="Phone Number" />
    <Button variant="contained">Save</Button>
   </Stack>
  </Card>
 );
}
