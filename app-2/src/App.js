import React, {Component} from 'react';
import './App.css';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      arr: ['1','2','3','4','5','6','7'],
    }
  }
  render(){
    let str = this.state.arr.map((element,index)=>{
      return (
        <h2 key={index}>{element}</h2>
      )
    });
    return(
        <div className="App">
        {str}
        </div>
    );
  }
}
