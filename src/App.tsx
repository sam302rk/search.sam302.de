import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Button, ButtonGroup, Paper, Stack, TextField } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { MOCHA } from './theme'

export default function App() {
    return (
        <Container maxWidth="sm">
            <Paper sx={{ p: 4, my: 2 }}>
                <Stack spacing={2}>
                    <Typography variant="h4">
                        Sam302rk
                    </Typography>
                    <ButtonGroup>
                        <TextField label='Suche' variant='outlined' size='small' color='secondary' sx={{ borderBlockColor: MOCHA.mauve.hex }}></TextField>
                        <Button color='secondary' variant='outlined' size='small'>Suchen</Button>
                        <Button color='secondary' variant='outlined' size='small'><ArrowDropDownIcon/></Button>
                    </ButtonGroup>
                </Stack>
            </Paper>
        </Container>
    )
}
