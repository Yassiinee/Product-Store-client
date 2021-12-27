import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <MainContainer>
      <h1>Welcome to Yassine Zakhama Website!</h1>
      <h2>We Picked These Just For You</h2>
    </MainContainer>
  );
};

export default Header;
// MAIN CONTEINER
const MainContainer = styled.header`
  background: url(../../images/1.jpg);
  background-position: center;
  background-repeat: no-repeat;
  height: 10rem;

  h1 {
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 900;
    position: absolute;
    top: 7%;
    left: 50%;
  }
  h2 {
    position: absolute;
    top: 14%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 900;
  }
`;
