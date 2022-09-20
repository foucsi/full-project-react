import React from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  align-self: flex-end;
  width: 100%;
  height: 15%;
  background-color: #161e30;

  .containerLogo {
    position: absolute;
    background-color: #20fef7;
    border-radius: 50%;
    padding: 10px;
    left: 150px;
    top: -40px;
  }
`;

function Navigation() {
  return (
    <Container>
      <div className="containerLogo">
        <NavLink to="/welcome">
          <FaHome size={60} color="#161e30" />
        </NavLink>
      </div>
    </Container>
  );
}

export default Navigation;
