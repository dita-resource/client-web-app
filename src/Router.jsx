import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MyComponent from "./dataa";
import Login from "./login";
import Signup from "./signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="clients" element={<MyComponent />} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}
