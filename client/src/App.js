import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Wrapper from "./utils/Wrapper";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
          </Switch>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
