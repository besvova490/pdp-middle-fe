import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import PrivateRoute from "./components/PrivateRoute";
import AuthRoute from "./components/AuthRoute";
import Preloader from "../components/Preloader";

// pages
const HomePage = React.lazy(() => import("./HomePage"));
const ProfilePage = React.lazy(() => import("./ProfilePage"));
const LoginPage = React.lazy(() => import("./LoginPage"));
const ContactUsPage = React.lazy(() => import("./ContactUsPage"));
const SignUpPage = React.lazy(() => import("./SignUpPage"));
const ChatsPage = React.lazy(() => import("./ChatsPage"));
const RestorePasswordPage = React.lazy(() => import("./RestorePasswordPage"));
const ResetPasswordPage = React.lazy(() => import("./ResetPasswordPage"));
const PostPage = React.lazy(() => import("./PostPage"));
const VideoMeet = React.lazy(() => import("./VideoMeet"));

function Router() {


  return (
    <React.Suspense fallback={<Preloader/>}>
      <Routes>
        <Route path="/" element={<PrivateRoute element={HomePage}/>}/>
        <Route path="/profile/my" element={<PrivateRoute element={ProfilePage}/>}/>
        <Route path="/post/:id" element={<PrivateRoute element={PostPage}/>}/>
        <Route path="/chats" element={<PrivateRoute element={ChatsPage}/>}/>
        <Route path="/chats/:id" element={<PrivateRoute element={ChatsPage}/>}/>
        <Route path="/video-meet" element={<PrivateRoute element={VideoMeet}/>}/>
        <Route path="/video-meet/:id" element={<PrivateRoute element={VideoMeet}/>}/>

        <Route path="/contact-us" element={<AuthRoute element={ContactUsPage}/>}/>
        <Route path="/auth/login" element={<AuthRoute element={LoginPage}/>}/>
        <Route path="/auth/sign-up" element={<AuthRoute element={SignUpPage}/>}/>
        <Route path="/auth/reset-password" element={<AuthRoute element={ResetPasswordPage}/>}/>
        <Route path="/auth/restore-password" element={<AuthRoute element={RestorePasswordPage}/>}/>
      </Routes>
    </React.Suspense>
  );
}

export default Router;
