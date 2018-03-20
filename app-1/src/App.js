import React, {Component} from 'react'
// import logo from './logo.svg';
import './App.css';

export default class App extends Component{
  constructor(){
    super();
    this.state={
      message:'',
    };
  }
  handleChange(value){
    this.setState({message:value});
  }

  render(){
    return(
      <div className="App">
      <input onChange={event=>this.handleChange(event.target.value)}
      />
      <p>{this.state.message}</p>
      </div>
    );
  }
}