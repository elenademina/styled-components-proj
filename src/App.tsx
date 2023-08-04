import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled";
import {StyledLink} from "./components/Link.styled";
import {myTheme} from "./styles/Theme.styled";

function App() {
    return (
        <div className="App">
             <Box>
                {/*<StyledBtn as={StyledLink} href={"#"}>LinkComponent</StyledBtn>*/}
                {/*<StyledBtn as="a" href={"#"}>Link</StyledBtn>*/}
        {/*        <StyledBtn color="red" fontSize={"20px"}>Hello</StyledBtn>
                <StyledBtn color="green">Hello</StyledBtn>
                <StyledBtn fontSize={"40px"}>Hello</StyledBtn>*/}
                <StyledBtn color={myTheme.colors.primary} btnType={"primary"} active>Hello</StyledBtn>
                <StyledBtn color={myTheme.colors.secondary} btnType={"outlined"}>Hello</StyledBtn>
            </Box>
        </div>
    );
}

export default App;

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
  
 /* @media ${myTheme.media.tablet} {
    flex-direction: column;
 */ }
`
