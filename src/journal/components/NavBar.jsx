import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({drawerWidth = 240}) => {
  return (
    <AppBar
    // fixed it's to keep hold position 
        position="fixed"
        sx={{
            // en pantantallas pequeñas
            width:  { sm: `calc(100% - ${drawerWidth}px)`},
            // en pantallas muy pequeñas que haga esto
            ml: {sm: `${drawerWidth}px`}
        }} 
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge="start"
                sx={{mr:2, display: {sm:'none'}}}
            >
                <MenuOutlined/>
            </IconButton>

            <Grid container direction='row' justifyContent='space-between'>
                <Typography variant='h6' noWrap component='div'> JournalApp </Typography>
                <IconButton color='error'>
                    <LogoutOutlined/>
                </IconButton>
            </Grid>
        </Toolbar>

    </AppBar>
  )
}
