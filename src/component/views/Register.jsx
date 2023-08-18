import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <img
        src="https://images.pexels.com/photos/4827131/pexels-photo-4827131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="hechando-sal-al-huevo"
        className="banner"
      />
      <Row className="mx-0">
        <Col md={4}>
          <div className="text-center boder rounded-3 my-5 px-2">
            <h1 className="display-1 titulo pt-5">GurDev</h1>
            <p className="h4 text-danger pb-5">Puedes ser tu propio chef!</p>
          </div>
        </Col>
        <Col md={8} className="text-center px-5">
          <h3 className="h3 pt-4 pb-3">Registrate gratis!</h3>
          <Form className="text-start py-3">
            <Form.Group className="mb-3">
              <Form.Label className="fw-light h4">Nombre Completo*</Form.Label>
              <Form.Control placeholder="Ej. Fulano Perez"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-light h4">
                Correo Electronico*:
              </Form.Label>
              <Form.Control placeholder="Ej. perez@gmail.com"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-light h4">Contraseña*:</Form.Label>
              <Form.Control placeholder="*********"></Form.Control>
            </Form.Group>
            <Form.Group className="text-center pb-4">
              <Button variant="warning">Registrarse</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Register;
