import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType?: "primary" | "outlined"
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  //background-color: #e72222;
    //background-color: ${props => props.color || "#4476c0"};
  padding: 10px 20px;
  //color: snow;
  font-size: ${props => props.fontSize || "3rem"};
  font-weight: bold;

  
  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || "#4476c0"};
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
  `}
  
    /* &:last-child {
     background-color: #ab9749;
   }*/

  &:hover {
    background-color: #3c732a;
  }
`