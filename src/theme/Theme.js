import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2A5693",
    },
    secondary: {
      main: "#F33490",
    },
    error: {
      main: red.A400,
    },
    text: {
      main: "#121212",
      secondary: "#ffffff",
    },
    background: {
      default: "#fff",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        a: {
          textDecoration: "none",
          color: "inherit",
        },
        html: {
          scrollBehavior: "smooth",
        },
      },
    },
  },
});

export default theme;
