import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClintLayout from "./Layouts/ClintLayout";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ClintLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
