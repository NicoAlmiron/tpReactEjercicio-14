import React from "react";
import { Badge, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = () => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <div className="w-100 h-100 my-2 w-md-50 h-md-50 m-md-2">
        <Card>
          <Card.Img
            variant="top"
            src="https://www.comedera.com/wp-content/uploads/2021/12/ensalada-de-lechuga1.jpg"
            alt="imagen-receta"
          />
          <Card.ImgOverlay className="pb-0">
            <Badge bg="success">entrada</Badge>
          </Card.ImgOverlay>
        </Card>
        <Card className="rounded-top-0">
          <Card.Body>
            <Card.Title className="display-6">Ensalada de verduras</Card.Title>
            <Card.Text>
              una rica ensalada fresca de verduras para la entrada de un buen
              plato exquisito
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center pt-3">
              <p className="text-warning">
                <i className="fa-regular fa-star pe-2">4.3</i>
              </p>
              <Link to={"/receta"} className="btn btn-success">
                Ver Receta
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default CardReceta;
