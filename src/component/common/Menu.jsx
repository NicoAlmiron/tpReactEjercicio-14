import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={"/"} className="titulo text-warning">
            GurDev
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink end to={"/"} className="nav-link">
                Inicio
              </NavLink>
              <NavLink end to={"/registrarse"} className="nav-link">
                Registrarse
              </NavLink>
              <NavLink end to={"/misRecetas"} className="nav-link">
                Mis recetas
              </NavLink>
              <NavLink end to={"/recetasFavoritas"} className="nav-link">
                Recetas favoritas
              </NavLink>
              <NavLink end to={"/recetas"} className="nav-link">
                Recetas
              </NavLink>
              <NavLink end to={"/Usuarios"} className="nav-link">
                Usuarios
              </NavLink>
              <NavLink end to={"/Login"} className="nav-link">
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
