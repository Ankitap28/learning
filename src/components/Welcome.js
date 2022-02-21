// import React, { Component } from 'react'

// class Welcome extends Component{
//     render(){
//         return(
//         <h1>
//         Class Component
//         </h1>)
//     }
// }

// export default Welcome

// // Destructuring props and state  Class Component
// import React, { Component } from "react";

// class Welcome extends Component {
//   render() {
//     return (
//     <h1>
//     Welcome {this.props.name} a.k.a {this.props.nickName}
//     </h1>)
//   }
// }

// export default Welcome;

// 1st method
import React, { Component } from "react";

class Welcome extends Component {
  render() {
      const {name,nickName} = this.props
    return (
      <h1>
        Welcome {name} a.k.a {nickName}
      </h1>
    );
  }
}

export default Welcome;