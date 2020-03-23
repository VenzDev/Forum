import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Wrapper from "./utils/Wrapper";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import forgotPasswordPage from "./pages/ForgotPasswordPage";
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import CreateThreadPage from "./pages/CreateThreadPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Wrapper>
          <ToastContainer />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/register" component={RegisterPage}></Route>
            <Route exact path="/createThread" component={CreateThreadPage}></Route>
            <Route exact path="/forum/:name" component={LoginPage}></Route>
            <Route exact path="/thread/:id" component={LoginPage}></Route>
            <Route exact path="/forgot" component={forgotPasswordPage}></Route>
          </Switch>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
