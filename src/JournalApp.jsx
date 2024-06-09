import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'
import { Route, Router } from 'react-router-dom'



export const JournalApp = () => {
  

  return (
    <AppTheme>
      <AppRouter/>
    </AppTheme>
  )
}
