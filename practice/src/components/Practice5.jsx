import {
 Button,
 Dialog,
 DialogTitle,
 DialogActions
} from "@mui/material";
import { useState } from "react";

export default function Practice5() {
 const [open, setOpen] = useState(false);

 return (
  <>
   <Button variant="contained" onClick={() => setOpen(true)}>
    Open Dialog
   </Button>

   <Dialog open={open} onClose={() => setOpen(false)}>
    <DialogTitle>Are you sure?</DialogTitle>
    <DialogActions>
     <Button onClick={() => setOpen(false)}>Cancel</Button>
     <Button color="error">Confirm</Button>
    </DialogActions>
   </Dialog>
  </>
 );
}
