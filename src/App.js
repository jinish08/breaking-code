import Landing from "./pages/Landing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./pages/Main";
import Sell from "./pages/Sell";
import Redeem from "./pages/Redeem";
// import Loginpage from "./pages/Loginpage";
import AuthContextProvider, { useAuth } from "./contexts/AuthContext";
import { useState } from "react";

const App = () => {

  const {currentUser} = useAuth();
  return (
    <>
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<Main />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/redeem" element={<Redeem />}/>
          {/* <Route path="/login" element={<Loginpage showAlert={showAlert}/>} /> */}
        </Routes>
      </Router>
      </AuthContextProvider>
    </>
  );
};

export default App;
