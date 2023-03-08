import { ThemeProvider, createTheme, AppBar, Toolbar } from '@mui/material'
import React, { Component } from 'react'

export class Success extends Component {
  render() {
    //create a theme
    const theme = createTheme({
      palette: {
        mode: "light",
      },
    })

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          {/* nav bar */}
          <AppBar position="static">
            <Toolbar variant="dense">
              Success
            </Toolbar>
          </AppBar>
          {/* Confirmation message */}
          <h1>Thank you for the submission</h1>
          <p>Further instructions will be sent to the email address you have provided</p>
        </React.Fragment>
      </ThemeProvider>    
    )
  }
}
export default Success