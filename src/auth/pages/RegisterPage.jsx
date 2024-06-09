
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
  
    <AuthLayout title="Sing up">
      <form>
        <Grid container>
          {/* mobile first xs -> md es para pantallas mas grandes */}
          {/* <Grid item xs={12} elegir uno de lo siguiente (sm md xl)={6}> */}
          <Grid item xs={12} sx={{mb:2,mt:1}}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Nombre Apellido"
              fullWidth
              
            />
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@correo.com"
                fullWidth
                sx={{mt:2}}
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
              Crear Nueva Cuenta
            </Button>
          </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>

    </AuthLayout>

  )
}
