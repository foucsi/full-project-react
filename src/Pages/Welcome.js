import React from "react";
import Navigation from "../Components/Navigation";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #273149;
`;

function Welcome() {
  return (
    <Container>
      <Navigation />
    </Container>
  );
}

export default Welcome;
