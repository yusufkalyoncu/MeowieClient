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
import { CommentProvider } from "./context/CommentContext";
import { SkeletonTheme } from "react-loading-skeleton";
import ScrollToTop from "./utils/ScrollToTop"
import 'font-awesome/css/font-awesome.min.css';
import Profile from "./pages/Profile";
import { MovieListProvider } from "./context/MovieListContext";
function App() {
  return (
    <div>
      <UserProvider>
      <CommentProvider>
      <MovieProvider>
      <AuthProvider>
      <MovieListProvider>
        
        <SkeletonTheme baseColor="#3f505c" highlightColor="#505f69">
          <Navbar/> 
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/detail/:id" element={<MovieDetail/>}/>
          </Routes>
        </SkeletonTheme>
      </MovieListProvider>
      </AuthProvider>
      </MovieProvider>
      </CommentProvider>
      </UserProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
