import React from 'react';
import './App.css';
import styled from "styled-components";
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li> <a href="">menu item 1</a> </li>
                    <li> <a href="">menu item 2</a> </li>
                    <li> <a href="">menu item 3</a> </li>
                </ul>

            </Menu>
            <Box>
                <StyledBtn as={StyledLink} href={"#"}>LinkComponent</StyledBtn>
                <StyledBtn as="a" href={"#"}>Link</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
                <SuperButton>SuperButton</SuperButton>
            </Box>
        </div>
    );
}

export default App;

const StyledBtn = styled.button`
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

const StyledLink = styled.a`
  color: #4476c0;
  font-size: 2rem;
  font-weight: bold;
  background-color: transparent;
  padding: 0;
`

const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #ffe869;
  color: darkslateblue;
`

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${StyledLink} {
    cursor: zoom-in;
  }
`

export const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;

    li > a {
      color: #3c732a;
    }
    
    li + li {
      margin-left: 20px;
    }
  }
`