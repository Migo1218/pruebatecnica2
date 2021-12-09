import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";

const Principal = () => {

  const [datos] = useSelector(state => state.search.productos)
  console.log(datos)
  
  

  return (
    <div>
      <Row >
        <Col>
          <CardGroup style={{ width: "100rem" }}>
            {datos.map((dat) => (
              <Card key={dat.id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={dat.imagen} />
                <Card.Body>
                  <Card.Title>{dat.nombre}</Card.Title>
                  <Card.Text>{dat.precio}</Card.Text>
                  <Button variant="dark">Comprar</Button>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Principal;
