import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({children, title=''}) => {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignContent="center"
    justifyContent="center"
    sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
    >

        <Grid item
        className='box-shadow'
        xs={3}
        sx={{
            backgroundColor: 'white',
            // con el xs indico size small windows and sm for medium windows
            width:{xs:350, sm: 400},  
            padding: 3, 
            borderRadius: 2}}
        >
            <Typography variant='h4' xs={{mb: 1}}>{title}</Typography>
            {children}
        </Grid>

    </Grid>
    )
}
