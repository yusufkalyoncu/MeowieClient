import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <UserProvider>
          <Navbar/> 
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </UserProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
