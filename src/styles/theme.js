import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#126ad6',
        },
        secondary: {
            main: '#19857b'
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff'
        }
    }
});

export const drawerWidth = 280

export default theme;



