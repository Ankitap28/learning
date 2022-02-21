import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Portal Demo</h1>,
    document.getElementById("portal-root")
  )
}

export default PortalDemo


// portal in react helps us to mount the element to different node of our choice like id=portal-root by ReactDOM.createPortal("which takes two argument first one can be any jsx element ,tag, or component itself and the 2nd one is the dom element on which is has to be mounted")in dom heirarchy which is buy default mounted to element id=root 