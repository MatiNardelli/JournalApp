import { createTheme } from "@mui/material";
import { red,lightBlue } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254',
        },
        secondary: {
            main: '#543884',
        },
        error: {
            main: red.A400
        },
    }
})