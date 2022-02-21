import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }

  render() {
    //   short circuit approach when u want to return either or noting

       return this.state.isLoggedIn && <div>Welcome Aman</div>
    //   ternary or conditional operator approach
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Aman</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // element variable approach
    // let message
    // if (this.state.isLoggedIn) {
    //    message= <div>Welcome Aman</div>
    // }
    // else{
    //     message= <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    //if else condition doesn't work inside jsx
    //   if(this.state.isLoggedIn){
    //       return(
    //           <div>Welcome Aman</div>
    //       )
    //   }
    //   else{
    //       return(
    //           <div>Welcome Guest</div>
    //       )
    //   }

    // return (
    //   <div>
    //     <div>Welcome Aman</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting