import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";

// defino el ancho
const drawerWidth = 240;

// ese un layout por eso quiero recibir un children
export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>

        {/* navbar */}
        <NavBar drawerWidth={drawerWidth}/>


        {/* sidebar */}
        <SideBar drawerWidth={drawerWidth}/>

        <Box 
          component='main'
          sx={{ flexGrow:1,p:3}}
        >
          {/* toolbar */}
          <Toolbar/>
          {children}
        </Box>
    </Box>
    
  )
}
