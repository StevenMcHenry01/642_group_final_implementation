// third party imports
import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "@material-ui/core/styles";

// my imports
import TopLayout from "./components/wrappers/TopLayout";
import TopNavbar from "./components/header/navbar/TopNavbar";
import BottomNavbar from "./components/header/navbar/BottomNavbar";
import { Routes } from "./Routes";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopLayout>
        <TopNavbar />
        <div style={{ width: "100%", flex: 1 }}>
          <MainContentContainerStyled>
            <Routes />
          </MainContentContainerStyled>
        </div>
        <BottomNavbar />
      </TopLayout>
    </ThemeProvider>
  );
}

export default App;

// STYLING
const MainContentContainerStyled = styled.div`
  padding: 1rem 0.5rem;
`;
