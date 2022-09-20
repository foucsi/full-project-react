import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../src/Context/UserContext";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";

const Application = styled.div`
  height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <UserContext.Provider value={{}}>
      <Application>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Application>
    </UserContext.Provider>
  );
}

export default App;
