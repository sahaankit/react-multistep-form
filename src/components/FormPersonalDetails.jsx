import { ThemeProvider, createTheme, AppBar, TextField, Button, Toolbar } from '@mui/material'
import React, { Component } from 'react'

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault() //prevents default action
    this.props.nextStep() // go to next step
  }

  back = e => {
    e.preventDefault() //prevents default action
    this.props.prevStep() // go to previous step
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

          {/* Nav bar */}
          <AppBar position="static">
            <Toolbar variant="dense">
              Enter Personal Details
            </Toolbar>
          </AppBar>
          <br />
          <br />

          {/* form input field*/}
          <TextField
          id="outlined-helperText"
          label="occupation"
          helperText="Enter your occupation"
          defaultValue={values.occupation}
          onChange = {handleChange('occupation')}
          />
          <br />
          <br />
          <TextField
          id="outlined-helperText"
          label="City"
          helperText="Enter your city"
          defaultValue={values.city}
          onChange = {handleChange('city')}
          />
          <br />
          <br />
          <TextField
          id="outlined-helperText"
          label="Bio"
          helperText="Enter a bio"
          defaultValue={values.bio}
          onChange = {handleChange('bio')}
          />
          <br />
          <br />

          {/* Button to go to previous step*/}
          <Button variant='contained' primary="true" style={styles.button} onClick={this.back}>Back</Button>

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
export default FormPersonalDetails