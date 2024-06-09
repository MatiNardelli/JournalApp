import { TurnedInNot } from "@mui/icons-material"
import { Box, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({drawerWidth}) => {
  return (
    <Box
        component='nav'
        sx={{width: {sm:drawerWidth},flexShrink:{sm:0}}}
    >
        <Drawer
            variant='permanent' //podria ser temporary
            open
            sx={{
                display: {xs: 'block'},
                '& .MuiDrawer-paper':{boxSizing: 'border-box',width:drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant='h4' noWrap component='div'>
                    Matias Nardelli
                </Typography>
            </Toolbar>
            <List>
                {
                    ['Enero','Febrero','Marzo'].map(text=>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>

                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>

    </Box>
  )
}
