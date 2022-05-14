import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CREATE_APPARTMENT, GET_APPARTMENTS } from "../../queries/Appartments";
import { useMutation, useQuery } from "@apollo/client";
import { CreateAppartmentInput, CreateAppartmentMutation, CreateAppartmentMutationVariables } from "../../types";

import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import AppartmentForm from "./AppartmentForm";

const CreateAppartment = () => {
  const navigate = useNavigate();
  const defaultValues: CreateAppartmentInput = {city: "", address: "", rooms: 0, price: 0, hasAir: false, hasElevator: false, hasParking: false};
  const [appartment, setAppartment] = useState<CreateAppartmentInput>(defaultValues);
  const [createAppartment, createdAppartment] = useMutation<CreateAppartmentMutation, CreateAppartmentMutationVariables>(CREATE_APPARTMENT);

  const handleSubmit = () => {
    if(appartment.city && appartment.address) {
      createAppartment({
        variables: {
          input: {
            ...appartment,
            rooms: Number(appartment.rooms),
            price: Number(appartment.price),
          }
        },
        refetchQueries: [{ query: GET_APPARTMENTS }],
      }).then(() => {
        navigate("/appartments");
      });
    } else{
      alert("City/Address is required, sorry I wish I were more user friendly :(")
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md="3"/>
        <Col md="6">
          <Card>
            <Card.Header>
              <Card.Title as="h4">New Appartment</Card.Title>
            </Card.Header>
            <Card.Body>
              <AppartmentForm handleSubmit={handleSubmit} setAppartment={setAppartment} appartment={appartment} />
            </Card.Body>
          </Card>
        </Col>
        <Col md="3"/>
      </Row>
    </Container>
  )
}
export default CreateAppartment