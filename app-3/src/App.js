import React, {Component} from 'react';
import './App.css';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      nums: '',
      array: ['family','words','test','checking','whatup','party','motorcycle','things'],
    }
  }
  handleChange(val){
    this.setState({nums:val});
  }
render(){
  let nums = this.state.array.filter((element,index)=> {
    return element.includes(this.state.nums)}).map((element,index)=> {
        return <h2 key={index}>{element}</h2>
      })

  return (
    <div className="App">
      <input onChange={event => this.handleChange(event.target.value)}
      />
      {nums}
    </div>
  );
 }
}