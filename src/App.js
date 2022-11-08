import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClintLayout from "./Layouts/ClintLayout";
import AddService from "./Pages/AddService";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MyReviews from "./Pages/MyReviews";
import ServiceDetails from "./Pages/ServiceDetails";
import Services from "./Pages/Services";
import Signup from "./Pages/Signup";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ClintLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/add-service" element={<PrivateRoute><AddService /></PrivateRoute>} />
        <Route path="/my-reviews" element={ <PrivateRoute><MyReviews/></PrivateRoute> } />
      </Route>
    </Routes>
  );
}

export default App;
