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
import ThreadPage from "./pages/ThreadPage";
import ThreadsPage from "./pages/ThreadsPage";
import UserPage from "./pages/UserPage";
import UserThreads from "./pages/UserThreads";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Wrapper>
          <df-messenger
            intent="WELCOME"
            chat-title="Support"
            agent-id="4ca32bbd-962c-4eb9-bf3f-533a94c4e55c"
            language-code="en"
          ></df-messenger>
          <ToastContainer />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/register" component={RegisterPage}></Route>
            <Route exact path="/createThread" component={CreateThreadPage}></Route>
            <Route exact path="/forum/:name" component={ThreadsPage}></Route>
            <Route exact path="/user/:id" component={UserPage}></Route>
            <Route exact path="/thread/:id" component={ThreadPage}></Route>
            <Route exact path="/forgot" component={forgotPasswordPage}></Route>
            <Route exact path="/yourThreads" component={UserThreads}></Route>
            <Route component={ErrorPage} />
          </Switch>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
