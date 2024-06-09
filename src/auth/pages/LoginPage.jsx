
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
  
    <AuthLayout title="Login">
      <form>
        <Grid container>
          {/* mobile first xs -> md es para pantallas mas grandes */}
          {/* <Grid item xs={12} elegir uno de lo siguiente (sm md xl)={6}> */}
          <Grid item xs={12} sx={{mb:2,mt:1}}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@correo.com"
              fullWidth
              
            />
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              sx={{mt:2}}
            />
          </Grid>

          <Grid container spacing={2} sx={{mb:2}}>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth>
              <Google/>
              <Typography sx={{ml:1}}>
                Google
              </Typography>
            </Button>
          </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>

    </AuthLayout>

  )
}
