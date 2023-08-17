import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="text-center bg-danger pb-4">
      <Image
        src="https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/404-not-found-t.jpg"
        className="w-100 mb-3"
      ></Image>
      <Link className="btn btn-warning btn-lg" to={"/"}>
        <i className="fa-solid fa-house-chimney px-2"></i>Volver al inicio
      </Link>
    </section>
  );
};

export default Error404;
