import React, {FC} from 'react';
import './App.css';
import ThePasswordInput from "./components/ThePasswordInput";
import {colors, createTheme, experimental_sx, Stack, ThemeProvider} from "@mui/material";
// import {experimental_sx as sx} from "@mui/material/styles";
import TheCalendar from "./components/TheCalendar";

const style = {
}

const myTheme = createTheme({
    custom: {
        popperColor: '#1B1B1B',
    },
    palette: {
        common: {}
    },
    components: {
        MuiTextField: {
            styleOverrides: {
            }
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
