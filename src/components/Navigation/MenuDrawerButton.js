import React from "react"
import styled from "styled-components"

const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 10px;
  height: 25px;
  width: 30px;
  background: transparent;
  border: none;
`

const ToggleButtonLine = styled.div`
  width: 30px;
  height: 3px;
  background-color: var(--mainColor);
`

const MenuDrawerButton = props => {
  return (
    <ToggleButton onClick={props.click}>
      <ToggleButtonLine></ToggleButtonLine>
      <ToggleButtonLine></ToggleButtonLine>
      <ToggleButtonLine></ToggleButtonLine>
    </ToggleButton>
  )
}

export default MenuDrawerButton
