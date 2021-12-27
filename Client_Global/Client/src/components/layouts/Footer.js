import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <span
        style={{
          color: "#fff",
          top: "1.5rem",
          left: " 35rem",
          position: "relative"
        }}
      >
        &copy;{new Date().getFullYear()} All Rights Reserved. Yassine ZAKHAMA.
      </span>
    </FooterContainer>
  );
};

export default Footer;
// FOOTER CONTAINER
const FooterContainer = styled.footer`
  background: #344;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4rem;
`;
