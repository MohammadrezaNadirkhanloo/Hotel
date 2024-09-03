import { createTheme } from "@mui/material";

export const Theme = createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#4caf50"
        }
    },
    components:{
        
    },
    typography: {
        button: {
          textTransform: 'none'
        }
      }
  });