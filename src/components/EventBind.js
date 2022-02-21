// Bindig Event Handlers
import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          message:'Hello'
       }
    //    this.clickHandler=this.clickHandler.bind(this)
    //    Approach3 ..Binding in class constructor
     }
//  clickHandler(){
//      this.setState({
//          message: 'Goodbye!'
//      })
//     console.log(this)
//  }
 
//  Approach4 ..Class property as arrow function
 clickHandler=()=>{
     this.setState({
         message:'Goodbye!'
     })
 }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>click</button>    .. Approach1 binding in render method*/}
        {/* <button onClick={() => this.clickHandler()}>click</button> ..Approach2 Arrow function in render method  */}

        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind