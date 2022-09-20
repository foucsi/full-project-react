import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const animModal = keyframes`
    from{
        opacity: 0;
        width:0 ;
    }to{
        opacity:1 ;
        width:200px ;
    }
`;

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 200px;
  background-color: red;
  top: 0;
  right: 0;
  animation: ${animModal} 250ms ease-in-out;
`;

function Modal() {
  return <Container></Container>;
}

export default Modal;
