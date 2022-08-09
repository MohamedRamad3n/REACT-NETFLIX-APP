import NavBar from "./components/NavBar";
import Home from "./components/Pages/Home";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./components/Pages/Login";
import SignUp from "./components/Pages/SignUp";
import Account from "./components/Pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
            </ProtectedRoute>
          }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
