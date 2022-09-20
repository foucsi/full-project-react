import React, { useContext } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { UserContext } from "../Context/UserContext";
import { FaBtc } from "react-icons/fa";

const animModal = keyframes`
    from{
        opacity: 0;
        width:0 ;
    }to{
        opacity:1 ;
        width:50% ;
    }
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  padding-top: 20px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  background-color: #273149;
  top: 0;
  right: 0;
  animation: ${animModal} 250ms ease-in-out;
  opacity: 1;

  .contentCrypto {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 60%;
    height: 10%;
    color: #fff;
    background-color: #121828;
    border-radius: 10px;
  }

  .titleModal {
    color: #fff;
  }

  .spanColor {
    color: #20fef7;
  }
`;

function Modal() {
  const { data } = useContext(UserContext);
  return (
    <Container>
      <FaBtc size={20} color="#20fef7" />
      <p className="titleModal">
        <span className="spanColor">C</span>rypto
        <span className="spanColor">F</span>oucsi
      </p>
      {data.map((crypto) => (
        <div key={crypto.id} className="contentCrypto">
          <p>{crypto.name}</p>
        </div>
      ))}
    </Container>
  );
}

export default Modal;
