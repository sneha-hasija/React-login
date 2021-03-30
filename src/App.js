import logo from './logo.svg';
import './App.css';
import Login from './login';


import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       loginUser:""
    }
  }
  
  UserDetails=(details)=>{
    this.setState({loginUser:details.uname})
}
handleState=(details)=>{
  this.setState({loginUser:""})
}

render(){
return (

  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {this.state.loginUser===""?<Login data={this.UserDetails}></Login>:
      <div>
        <h3>Welcome {this.state.loginUser}</h3><br/
        ><input type="button" value="LogOut" className="btn btn-primary" onClick={this.handleState}></input></div>}
     
    </header>
  </div>
)

  }}


export default App

