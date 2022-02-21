import React, { Component } from 'react'

 class RefsDemo extends Component {

    constructor(props) {
      super(props)
    this.inputRef=React.createRef()
      
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" autoFocus />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo