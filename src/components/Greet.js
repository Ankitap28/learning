// import React from 'react';

// // function Greet(){
// //     return <h1>Hello World</h1>

// // }
// const Greet= props => { 
//   return <h1>hello {props.name} a.k.a {props.nickName}</h1> 
// }

// export default Greet;

//   .....Destructuring Props.......
//1st method
// import React from "react";

// const Greet = ({name,nickName}) => {
//   return (
//     <h1>
//       hello {name} a.k.a {nickName}
//     </h1>
//   );
// };

// export default Greet;

// 2nd method
import React from "react";

const Greet = (props) => {
  const { name, nickName } = props
  return (
    <h1>
      hello {name} a.k.a {nickName}
    </h1>
  );
};

export default Greet;