import "./App.css";
import Layout from "./components/Layout";
import IndexPage from "./components/Pages/IndexPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Pages/LoginPage";
import Register from "./components/Pages/Register";
import {  UserContextProvider } from "./UserContext";
import CreatePost from "./components/Pages/CreatePost";
import PostPage from "./components/Pages/PostPage";
import Editpost from "./components/Pages/Editpost";



function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<Editpost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
