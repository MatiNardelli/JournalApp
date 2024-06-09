import { StarOutline } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';


export const NothingSelectedView = () => {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignContent="center"
    justifyContent="center"
    // vh:viewHigh
    // sx={{minHeight: 'calc(100vh- 110px)', backgroundColor: 'primary.main'}}
    sx={{minHeight: '80vh', backgroundColor: 'primary.main', borderRadius:3}}
    >
        <Grid item xs={12}
        justifyContent='space-between'
        >
            <StarOutline sx={{fontSize: 100, color: 'grey'}}/>
        </Grid>
        <Grid item xs={12}>
            {/* <Typography color="white" variant='h6'>Seleccione o crea una entrada</Typography> */}
            <Typography color='white'>Hola a todos, yo soy el león. Rugió la feria en medio de la avenida</Typography>
        </Grid>
    </Grid>
  )
}
