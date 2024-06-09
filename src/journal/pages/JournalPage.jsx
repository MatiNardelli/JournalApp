import { IconButton, Typography } from '@mui/material';
import { AddOutlined, MailOutline } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';


export const JournalPage = () => {
  return (
    <JournalLayout>
      
      {/* <Typography variant="h4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci consequuntur aliquam numquam, doloribus dolore illo voluptates rem! Optio dolorum sunt, ab maxime fugit beatae enim similique minima nemo voluptate molestiae!</Typography> */}
      
      {/* selecciono cuando no hay nada seleccionado */}
      <NothingSelectedView/>
      
      {/* <NoteView/> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          // hover funcino mouse over this element
          ':hover': {background:'error.main', opacity:0.9},
          position:'fixed',
          right:50,
          bottom:50,
        }}
      >
        <AddOutlined sx={{fontSize:20}}/>
      </IconButton>

    </JournalLayout>
  )
}

