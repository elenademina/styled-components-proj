import styled from "styled-components";

export const StyledBtn = styled.button`
  border: none;
  background-color: #e72222;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #3c732a;
  }

  &:last-child {
    background-color: #ab9749;
  }
`

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #ffe869;
  color: darkslateblue;
`