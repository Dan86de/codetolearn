import React from "react"
import styled from "styled-components"

const ToggleButton = styled.b`
  height: 22px;
  width: 22px;
  cursor: pointer;
  outline: none;
  transition: all 0.15s linear;
  position: relative;
  i {
    position: absolute;
  }
  i:nth-of-type(1) {
    top: 3px;
    left: 0;
  }
  i:nth-of-type(2) {
    top: 10px;
    left: 0;
  }
  i:nth-of-type(3) {
    bottom: 2px;
    left: 0;
  }
  &.active i:nth-of-type(1) {
    transform: rotate(45deg);
    top: calc(50% - 2px);
  }
  &.active i:nth-of-type(2) {
    display: none;
  }
  &.active i:nth-of-type(3) {
    transform: rotate(-45deg);
    top: calc(50% - 2px);
  }
`

const ToggleButtonLine = styled.i`
  transform-origin: center center;
  display: block;
  width: 100%;
  height: 3px;
  z-index: 999;
  background-color: var(--mainColor);
  transition: all 0.15s linear;
  &.active {
    background-color: var(--textOnMain);
  }
  @media only screen and (min-width: 1280px) {
    background-color: ${props =>
      props.currentPath === "/" ? "var(--textOnMain)" : "var(--mainColor)"};
  }
`

const MenuDrawerButton = props => {
  return (
    <ToggleButton className={props.onActive ? "active" : ""}>
      <ToggleButtonLine
        className={props.onActive ? "active" : ""}
        currentPath={props.currentPath}
      ></ToggleButtonLine>
      <ToggleButtonLine
        className={props.onActive ? "active" : ""}
        currentPath={props.currentPath}
      ></ToggleButtonLine>
      <ToggleButtonLine
        className={props.onActive ? "active" : ""}
        currentPath={props.currentPath}
      ></ToggleButtonLine>
    </ToggleButton>
  )
}

export default MenuDrawerButton
