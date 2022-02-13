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
import Loginpage from "./pages/Loginpage";
import AuthContextProvider from "./contexts/AuthContext";
import Alert from "./components/Alert";
import { useState } from "react";

const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
    <AuthContextProvider>
      <Router>
      <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Landing showAlert={showAlert}/>} />
          <Route path="/main" element={<Main showAlert={showAlert}/>} />
          <Route path="/sell" element={<Sell showAlert={showAlert}/>} />
          <Route path="/redeem" element={<Redeem showAlert={showAlert}/>} />
          <Route path="/login" element={<Loginpage showAlert={showAlert}/>} />
        </Routes>
      </Router>
      </AuthContextProvider>
    </>
  );
};

export default App;
