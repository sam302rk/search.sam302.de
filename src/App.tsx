import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Avatar, Box, Button, ButtonGroup, Paper, Stack, TextField } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { MOCHA } from './theme'

export default function App() {
    return (
        <Container maxWidth="sm" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Paper sx={{ p: 4 }}>
                <Stack spacing={2} sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1, flexDirection: 'row' }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h4">
                                Sam302rk
                            </Typography>
                            <Typography variant="subtitle1">
                                search.sam302.de
                            </Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row-reverse' }}>
                            <Avatar src='icon.png' sx={{ width: 72, height: 72 }} />
                        </Box>
                    </Box>
                    
                    <ButtonGroup sx={{ flexGrow: 1 }}>
                        <TextField label='Suche' variant='filled' size='small' color='secondary' sx={{ borderBlockColor: MOCHA.mauve.hex, flexGrow: 1 }}></TextField>
                        <Button color='secondary' variant='outlined' size='small'>mit Google</Button>
                        <Button color='secondary' variant='outlined' size='small'><ArrowDropDownIcon/></Button>
                    </ButtonGroup>
                </Stack>
            </Paper>
        </Container>
    )
}
