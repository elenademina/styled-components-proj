import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    primary?: boolean
    outlined?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  //background-color: #e72222;
    //background-color: ${props => props.color || "#4476c0"};
  padding: 10px 20px;
  //color: snow;
  font-size: ${props => props.fontSize || "3rem"};
  font-weight: bold;

  &:hover {
    background-color: #3c732a;
  }

  //outlined
  ${props => props.outlined && css<StyledBtnPropsType>`

    border: 2px solid ${props => props.color || "#4476c0"};
    color: ${props => props.color || "#4476c0"};
    background-color: transparent;
  `} //primary
  ${props => props.primary && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "#4476c0"};
    color: snow;
  `
  } /* &:last-child {
     background-color: #ab9749;
   }*/
`