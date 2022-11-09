import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClintLayout from "./Layouts/ClintLayout";
import About from "./Pages/About";
import AddService from "./Pages/AddService";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MyReviews from "./Pages/MyReviews";
import ServiceDetails from "./Pages/ServiceDetails";
import Services from "./Pages/Services";
import Signup from "./Pages/Signup";
import UpdateReview from "./Pages/UpdateReview";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ClintLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About/> } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/add-service" element={<PrivateRoute><AddService /></PrivateRoute>} />
        <Route path="/my-reviews" element={<PrivateRoute><MyReviews /></PrivateRoute>} />
        <Route path="/my-review/update/:id" element={<PrivateRoute><UpdateReview/></PrivateRoute> } />
      </Route>
    </Routes>
  );
}

export default App;
