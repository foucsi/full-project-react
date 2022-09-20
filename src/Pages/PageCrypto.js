import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import styled from "styled-components";
import Navigation from "../Components/Navigation";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .containerCrypto {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: 90%;
  }

  .containerCrypto img {
    height: 100px;
  }

  .containerCrypto p {
    font-size: 1.5rem;
  }
`;

function PageCrypto() {
  const { value } = useContext(UserContext);
  return (
    <Container>
      {value.map((crypto) => (
        <div className="containerCrypto">
          <img src={crypto.img} alt="img" />
          <p>{crypto.text}</p>
          <p>${crypto.tarif}</p>
        </div>
      ))}

      <Navigation />
    </Container>
  );
}

export default PageCrypto;
