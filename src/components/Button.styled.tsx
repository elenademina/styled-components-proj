import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType?: "primary" | "outlined"
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  padding: 10px 20px;
  //color: snow;
  font-size: ${props => props.fontSize || "3rem"};
  font-weight: bold;
  animation: ${MyAnimation} 2s ease-in-out;

  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || "#ffffff"};
    color: ${props => props.color || "#4476c0"};
    background-color: transparent;

    &:hover {
      border-color: #3c732a;
      color: #3c732a;
      background-color: transparent;
    }
  `} 
  
  
  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "#4476c0"};
    color: snow;

    &:hover {
      background-color: #3c732a;
    }

  `}
  
    /* &:last-child {
     background-color: #ab9749;
   }*/
  
  ${props => props.active && css<StyledBtnPropsType>`
    box-shadow: 5px 5px 5px 5px rgba(59, 65, 57, 0.6);
  `
}
`