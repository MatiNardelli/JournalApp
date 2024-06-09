import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {purpleTheme} from './';

//por el {children}, se transforma en higher order component
export const AppTheme = ({children}) => {
    
  return (
    <ThemeProvider theme={purpleTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
        {children}      
    </ThemeProvider>    
  )
}
