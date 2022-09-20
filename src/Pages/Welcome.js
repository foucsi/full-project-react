import React, { useContext } from "react";
import Navigation from "../Components/Navigation";
import styled from "styled-components";
import { UserContext } from "../Context/UserContext";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #273149;
  padding-top: 20px;

  .containerCrypto {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 90%;
    width: 90%;
  }

  .cryptoBtc {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    height: 20%;
    background-color: #20fef7;
    border-radius: 10px;
    color: #112439;
    font-size: 1.5rem;
  }

  .cryptoBtc img {
    height: 60px;
  }

  .cryptoOther {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    color: #fff;
    border-radius: 10px;
    height: 150px;
    width: 150px;
    background-color: #121828;
  }

  .cryptoOther img {
    height: 30px;
  }
`;

function Welcome() {
  const { data } = useContext(UserContext);
  return (
    <Container>
      <div className="containerCrypto">
        {data.map((crypto) => {
          if (crypto.name === "Bitcoin") {
            return (
              <div key={crypto.id} className="cryptoBtc">
                <p>{crypto.name}</p>
                <p>${crypto.current_price}</p>
                <img src={crypto.image} alt="" />
              </div>
            );
          }
          return (
            <div key={crypto.id} className="cryptoOther">
              <p>{crypto.name}</p>
              <p>${crypto.current_price}</p>
              <img src={crypto.image} alt="" />
            </div>
          );
        })}
      </div>
      <Navigation />
    </Container>
  );
}

export default Welcome;
