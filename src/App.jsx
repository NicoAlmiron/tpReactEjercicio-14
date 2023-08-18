import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/reset.css";
import Menu from "./component/common/Menu";
import Footer from "./component/common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./component/views/Inicio";
import Error404 from "./component/views/Error404";
import Register from "./component/views/Register";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
