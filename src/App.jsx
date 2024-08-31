import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Gallary from "./Pages/Gallary/Gallary"
import Slideshow from './Pages/Slideshow/Slideshow'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" element={<Home />}></Route>
          <Route path="/Gallary/:id/:name" element={< Gallary />}></Route>
          <Route path="Slideshow" element={<Slideshow />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
