import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './login.css'

class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             uname:"",
             uid:"",
             upassword:""
        }
    }

    handleCahnge=(event)=>{

        const {name,value}=event.target
        this.setState({[name]:value})
    }

    hanldleSubmit=(event)=>{
        event.preventDefault();
       this.props.data(this.state)
    }

    
    
    render() {
        return (
            <div>
                <form>
                <h3  className="header">LogIn Form</h3>
             
                   
         <div className="col-3 mx-auto">   
         <label className="content">Name</label>
<input type="text" className="form-control" required value={this.state.uname} onChange={this.handleCahnge} name="uname"/>        
<label className="content">UserId</label>
<input type="text" className="form-control" required value={this.state.uid} onChange={this.handleCahnge} name="uid" />
<label className="content">Password</label>
<input type="password" className="form-control" required value={this.state.upassword} onChange={this.handleCahnge} name="upassword"/>
<input type="submit" value="Login" className="btn btn-primary mt-4" onClick={this.hanldleSubmit}/>
{/* <br/>
<label className="content">Don't have Account</label>
<a href="./signup" className="btn-link btn-sm">SignUp</a> */}
</div> 
</form>
               
              
            </div>
        )
        }
    }

export default Login
