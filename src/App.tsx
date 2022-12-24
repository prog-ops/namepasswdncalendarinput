import React, {FC} from 'react';
import './App.css';
import ThePasswordInput from "./screens/ThePasswordInput";
import {colors, createTheme, experimental_sx, Stack, ThemeProvider} from "@mui/material";
// import {experimental_sx as sx} from "@mui/material/styles";
import TheCalendar from "./screens/TheCalendar";

const myTheme = createTheme({
    typography: {
        fontFamily: [
            'Ubuntu',
            'sans-serif',
            'cursive',
        ].join(','),
    },
    custom: {
        popperColor: '#1B1B1B',
    },
    palette: {
        common: {}
    },
    components: {
        MuiTextField: {
            styleOverrides: {}
        }
    },
})

const App: FC = () => {

    return (
        <ThemeProvider theme={myTheme}>
            <Stack spacing={2} direction='row' sx={{
                justifyContent: 'space-around',
                alignItems: 'baseline'

            }}>
                <TheCalendar/>
                <ThePasswordInput/>
            </Stack>
        </ThemeProvider>
    )
}
export default App;
