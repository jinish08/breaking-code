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

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<Main />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/redeem" element={<Redeem />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
