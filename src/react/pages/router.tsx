import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import PrivateRoute from "./components/PrivateRoute";
import AuthRoute from "./components/AuthRoute";

// pages
const HomePage = React.lazy(() => import("./HomePage"));
const ProfilePage = React.lazy(() => import("./ProfilePage"));
const LoginPage = React.lazy(() => import("./LoginPage"));
const SignUpPage = React.lazy(() => import("./SignUpPage"));
const RestorePasswordPage = React.lazy(() => import("./RestorePasswordPage"));
const ResetPasswordPage = React.lazy(() => import("./ResetPasswordPage"));
const PostPage = React.lazy(() => import("./PostPage"));

function Router() {


  return (
    <React.Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<PrivateRoute element={HomePage}/>}/>
        <Route path="/profile/my" element={<PrivateRoute element={ProfilePage}/>}/>
        <Route path="/post/:id" element={<PrivateRoute element={PostPage}/>}/>

        <Route path="/auth/login" element={<AuthRoute element={LoginPage}/>}/>
        <Route path="/auth/sign-up" element={<AuthRoute element={SignUpPage}/>}/>
        <Route path="/auth/reset-password" element={<AuthRoute element={ResetPasswordPage}/>}/>
        <Route path="/auth/restore-password" element={<AuthRoute element={RestorePasswordPage}/>}/>
      </Routes>
    </React.Suspense>
  );
}

export default Router;
