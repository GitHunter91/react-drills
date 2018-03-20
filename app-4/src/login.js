import React,{Component} from 'react'
import './App.css'

export default class Login extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
        }
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(){
        alert(`Username:${this.state.username} and Password:${this.state.password}`);
    }
    handleUsernameChange(name){
        this.setState({username:name});
    }
    handlePasswordChange(pass){
        this.setState({password:pass});
    }
    render(){
        return(
            <div className="App">
            <label for="username">Username:</label>
                <input onChange={event=>this.handleUsernameChange(event.target.value)} type="text"/>
            <label for="password">Password:</label>
                <input onChange={event=>this.handlePasswordChange(event.target.value)} type="text"/>
            <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}