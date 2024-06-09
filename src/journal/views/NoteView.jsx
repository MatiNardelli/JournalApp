import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    // <box> es como un div - <grid></grid> me permite definir elementos internamente 
    <Grid container direction='row' justifyContent='space-between' alignContent='center' sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>28 de agosto 2023</Typography>
        </Grid>
        <Grid>
          <Button color="primary" sx={{padding:2}}>
            <SaveOutlined sx={{fontSize:30,mr:1}}/>
            Guardar
          </Button>
        </Grid>
        <Grid container>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un título"
            label="Título"
            sx={{border:'none',md:1,mb:1}}
          />
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="¿Qué sucedió el día de hoy?"
            minRows={5}
          />
        </Grid>

        {/* image gallery */}
        <ImageGallery/>
    </Grid>
  )
}
