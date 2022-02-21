import React, { Component } from 'react'

 class RenderPropsChild extends Component {
  render() {
    return (
      <div>
      RenderPropsChild
      {this.props.render()}

      </div>
    )
  }
}

export default RenderPropsChild