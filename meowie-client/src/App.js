import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthContext, { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <Navbar/> 
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
