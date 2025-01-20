import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { flavors } from '@catppuccin/palette'

export const MOCHA = flavors.mocha.colors

const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            main: MOCHA.lavender.hex,
        },
        secondary: {
            main: MOCHA.mauve.hex,
        },
        error: {
            main: MOCHA.red.hex,
        },
        background: {
            default: MOCHA.crust.hex,
            paper: MOCHA.base.hex,
        },
        success: {
            main: MOCHA.green.hex
        },
        text: {
            primary: MOCHA.text.hex,
            secondary: MOCHA.subtext0.hex,
            disabled: MOCHA.subtext1.hex
        },
        divider: MOCHA.overlay0.hex
    }
})

export default theme
