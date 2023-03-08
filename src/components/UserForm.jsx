import { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Success from './Success'
import Confirm from './Confirm'
export class UserForm extends Component {

  //state object
  state = {
    step: 1,
    firstName: '',
    middleName: '',
    lastName: '',
    email:'',
    occupation: '',
    city: '',
    bio: ''
  }
  

  //proceed to next step
  nextStep = () => {
    const {step} = this.state
    this.setState({
      step: step +1
    })
  }

  //proceed to previous step
  prevStep = () => {
    const {step} = this.state
    this.setState({
      step: step-1
    })
  }

  //handle input change

  //curried function
  handleChange = input => e => {
    this.setState({[input]: e.target.value}) //here input === e.target.name
  }

  /*//without currying
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }*/

  render() {
    const {step} = this.state
    const {firstName, middleName, lastName, email, occupation, city, bio} = this.state //destructure values object
    const values = {firstName, middleName, lastName, email, occupation, city, bio} //store it in local object
    switch(step) {
      case 1:
        return (
          <FormUserDetails nextStep ={this.nextStep} handleChange={this.handleChange} values= {values} />
        )
      case 2:
        return (
          <FormPersonalDetails nextStep ={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values= {values} />
        )
      case 3:
        return (
          <Confirm nextStep ={this.nextStep} prevStep={this.prevStep} values= {values}/>
        )
      case 4:
        return (
          <Success /> 
        )
    }
  }
}

export default UserForm