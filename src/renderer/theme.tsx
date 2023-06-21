import { createTheme } from "@mui/material/styles";

// Create a Material-UI theme instance
// https://mui.com/customization/theming/
const theme = createTheme({
  palette: {
    primary: {
      main: "#9575CD",
    },
    secondary: {
      main: "#9575CD",
    },
    background: {
      // default: "#2C2E3B",
       default: "#F8F8F8",
    },
  },
  typography: {
    fontWeightMedium: 600,
    fontSize: 17,
    h1: {
      fontSize: "2.2rem",
      fontWeight: 400,
      color: "#262f32",
    },
    body1: {
      color: "#262f32",
    },
  },
});

export default theme;
