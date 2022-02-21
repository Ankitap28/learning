import React, { Component } from 'react'
import RenderPropsChild from './RenderPropsChild'

class RenderProps extends Component {
  render() {
    return (
      
       <RenderPropsChild render={()=>{
           
           return (
             <div>
               <h3>I am coming from render props</h3>
             </div>
           );
           
       }}/>
      
    )
  }
}

export default RenderProps