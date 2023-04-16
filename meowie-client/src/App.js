import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Movies from "./pages/Movies";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import { ToastContainer} from 'react-toastify';
import MovieDetail from "./pages/MovieDetail";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <div>
      <MovieProvider>
      <AuthProvider>
        <UserProvider>
          <Navbar/> 
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/detail/:id" element={<MovieDetail/>}/>
          </Routes>
        </UserProvider>
      </AuthProvider>
      </MovieProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
