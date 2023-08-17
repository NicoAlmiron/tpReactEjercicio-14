import React from "react";
import { Carousel, Container, Image, Row } from "react-bootstrap";
import CardReceta from "./recetas/CardReceta";

const Inicio = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <Image
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="imagen-carrusel"
            className="w-100"
            style={{ height: "25rem" }}
          ></Image>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="imagen-carrusel"
            className="w-100"
            style={{ height: "25rem" }}
          ></Image>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="imagen-carrusel"
            className="w-100"
            style={{ height: "25rem" }}
          ></Image>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="mb-3">
        <Row>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
        </Row>
      </Container>
    </>
  );
};

export default Inicio;
