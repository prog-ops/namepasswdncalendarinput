import React from "react";

declare module '@mui/material/styles' {

    interface Theme {
        custom: {
            popperColor: string
        }
    }
    interface ThemeOptions {
        custom: {
            popperColor: React.CSSProperties['color']
        }
    }
}
