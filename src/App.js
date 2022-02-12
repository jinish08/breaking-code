import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
