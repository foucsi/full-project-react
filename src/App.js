import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../src/Context/UserContext";
import Home from "./Pages/Home";

const Application = styled.div`
  height: 100vh;
  width: 100%;
  background-color: tomato;
`;

function App() {
  return (
    <UserContext.Provider value={{}}>
      <Application>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Application>
    </UserContext.Provider>
  );
}

export default App;
