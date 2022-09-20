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
    justify-content: center;
    width: 90%;
    height: 20%;
    background-color: #20fef7;
    border-radius: 10px;
    color: #112439;
  }
  .cryptoOther {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 10px;
    height: 150px;
    width: 150px;
    background-color: #121828;
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
              </div>
            );
          }
          return (
            <div key={crypto.id} className="cryptoOther">
              <p>{crypto.name}</p>
            </div>
          );
        })}
      </div>
      <Navigation />
    </Container>
  );
}

export default Welcome;
