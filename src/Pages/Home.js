import React from "react";
import styled from "styled-components";
import { FaBtc } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-self: flex-end;
  background-color: #273149;
  border: 3px solid #fff;
  height: 10%;

  .spanColor {
    color: #20fef7;
  }

  .containerLogo {
    margin-top: 20px;
    padding: 10px;
    border-radius: 50%;
    border: 3px solid #fff;
  }

  h1 {
    color: #fff;
  }
`;

function Home() {
  return (
    <Container>
      <h1>
        <span className="spanColor">C</span>rypto
        <span className="spanColor">F</span>oucsi
      </h1>
      <NavLink to="/welcome">
        <div className="containerLogo">
          <FaBtc size={60} color="#20fef7" />
        </div>
      </NavLink>
    </Container>
  );
}

export default Home;
