import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//importing Habits component and rendering it
import Habits from "./Habits";
//importing Navbar component
import Navbar from "./Navbar";
//importing Home component
import Home from "./Home";
//importing Footer component
import Footer from "./Footer";

//this is App component
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/habit-tracker" element={<Home />} />
          <Route path="/habits" element={<Habits />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
