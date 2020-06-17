import React from "react"
import styled from "styled-components"

const BackdropWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(11, 19, 38, 0.95);
  z-index: 997;
`
const Backdrop = props => {
  return <BackdropWrapper onClick={props.click} />
}

export default Backdrop
