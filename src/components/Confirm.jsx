import { ThemeProvider, createTheme, AppBar, List, ListItem, ListItemText, Button, Toolbar } from '@mui/material'
import React, { Component } from 'react'

export class Confirm extends Component {
  continue = e => {
    e.preventDefault() //prevents default action
    // process form //
    this.props.nextStep() // go to next step
  }

  back = e => {
    e.preventDefault() //prevents default action
    this.props.prevStep() // go to previous step
  }
  render() {
    const {values: {firstName, middleName, lastName, email, occupation, city, bio}} = this.props; //destructuring to use as an variable

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
              Confirm User Data
            </Toolbar>
          </AppBar>

          {/* display form input field*/}
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Middle Name" secondary={middleName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />  
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupation" secondary={occupation} />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bio" secondary={bio} />
            </ListItem>
          </List>
          <br />
          <br />

          {/* Button to go to previous step*/}
          <Button variant='contained' primary="true" style={styles.button} onClick={this.back}>Back</Button>
          {/* Button to go to next step*/}
          <Button variant='contained' primary="true" style={styles.button} onClick={this.continue}>Save & Confirm</Button>
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
export default Confirm