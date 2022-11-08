import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClintLayout from "./Layouts/ClintLayout";
import Home from "./Pages/Home";
import ServiceDetails from "./Pages/ServiceDetails";
import Services from "./Pages/Services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ClintLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails /> } />
      </Route>
    </Routes>
  );
}

export default App;
