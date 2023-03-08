import { ThemeProvider, createTheme, AppBar, TextField, Button, Toolbar } from '@mui/material'
import React, { Component } from 'react'

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault() //prevents default action
    this.props.nextStep() // go to next step
  }
  render() {
    const {values, handleChange} = this.props; //destructuring to use as an variable
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
              Enter User Details
            </Toolbar>
          </AppBar>
          <br />
          <br />

          {/* form input field*/}
          <TextField
          required
          id="outlined-helperText"
          label="First Name"
          helperText="Enter your first name"
          defaultValue={values.firstName}
          onChange = {handleChange('firstName')}
          />
          <br />
          <br />
          <TextField
          id="outlined-helperText"
          label="Middle Name"
          helperText="Enter your middle name"
          defaultValue={values.middleName}
          onChange = {handleChange('middleName')}
          />
          <br />
          <br />
          <TextField
          required
          id="outlined-helperText"
          label="Last Name"
          helperText="Enter your last name"
          defaultValue={values.lastName}
          onChange = {handleChange('lastName')}
          />
          <br />
          <br />
          <TextField
          required
          id="outlined-helperText"
          label="E-mail"
          helperText="Enter your e-mail address"
          defaultValue={values.email}
          onChange = {handleChange('email')}
          />
          <br />
          <br />
          {/* Button to go to next step*/}
          <Button variant='contained' primary="true" style={styles.button} onClick={this.continue}>Next</Button>
        </React.Fragment>
      </ThemeProvider>    
    )
  }
}
//custom styles for button
const styles = {
  button: {
    margin: 15
  }
}
export default FormUserDetails