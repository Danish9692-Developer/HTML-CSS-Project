import { Tabs, Tab, Box, Typography } from "@mui/material";
import { useState } from "react";

export default function Practice4() {
 const [tab, setTab] = useState(0);

 return (
  <Box>
   <Tabs value={tab} onChange={(e, v) => setTab(v)}>
    <Tab label="Configuration" />
    <Tab label="Bank Account" />
    <Tab label="Expense Category" />
    <Tab label="Revenue Report" />
   </Tabs>

   <Box sx={{ p: 2 }}>
    {tab === 0 && <Typography>Configuration Content</Typography>}
    {tab === 1 && <Typography>Bank Account Content</Typography>}
    {tab === 2 && <Typography>Expense Category Content</Typography>}
    {tab === 3 && <Typography>Revenue Report Content</Typography>}
   </Box>
  </Box>
 );
}
