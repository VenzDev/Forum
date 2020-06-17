import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Wrapper from "./utils/Wrapper";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import Loader from "react-loader-spinner";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const CreateThreadPage = lazy(() => import("./pages/CreateThreadPage"));
const ThreadPage = lazy(() => import("./pages/ThreadPage"));
const ThreadsPage = lazy(() => import("./pages/ThreadsPage"));
const UserPage = lazy(() => import("./pages/UserPage"));
const UserThreads = lazy(() => import("./pages/UserThreads"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

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
          <Suspense
            fallback={
              <Loader
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: "1000",
                }}
                type="BallTriangle"
                color="blue"
              />
            }
          >
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route exact path="/login" component={LoginPage}></Route>
              <Route exact path="/register" component={RegisterPage}></Route>
              <Route exact path="/createThread" component={CreateThreadPage}></Route>
              <Route exact path="/forum/:name" component={ThreadsPage}></Route>
              <Route exact path="/user/:id" component={UserPage}></Route>
              <Route exact path="/thread/:id" component={ThreadPage}></Route>
              <Route exact path="/forgot" component={ForgotPasswordPage}></Route>
              <Route exact path="/yourThreads" component={UserThreads}></Route>
              <Route component={ErrorPage} />
            </Switch>
          </Suspense>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
