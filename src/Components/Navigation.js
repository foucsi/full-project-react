import React from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
  width: 100%;
  height: 15%;
  background-color: #161e30;

  .containerLogo {
    position: absolute;
    background-color: #20fef7;
    border-radius: 50%;
    padding: 10px;
    left: 155px;
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
      <BsPlusLg color="#808B9C" size={40} />
      <AiOutlineSetting color="#808B9C" size={40} />
    </Container>
  );
}

export default Navigation;
