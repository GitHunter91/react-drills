import React, {Component} from 'react';



export default class NewTask extends Component{
 constructor(){
     super();
     this.state={
         input:'',
     };
     
this.handleAdd=this.handleAdd.bind(this);
 }
handleInputChange(val){
this.setState({input:val});
}
handleAdd(){
    this.props.add(this.state.input);
    this.setState({input: ''});
}

render(){
    return(
        <div>
            <input value={this.state.input}
                   placeholder="Enter new Task"
                   onChange={event=>this.handleInputChange(event.target.value)}
            />
            <button onClick={this.handleAdd}>Add Task</button>
        </div>
    )
}
}