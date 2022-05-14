import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { EDIT_APPARTMENT, FIND_APPARTMENT, GET_APPARTMENTS } from "../../queries/Appartments";
import { useMutation, useLazyQuery } from "@apollo/client";
import { CreateAppartmentInput, FindAppartmentQuery, FindAppartmentQueryVariables, UpdateAppartmentMutation, UpdateAppartmentMutationVariables } from "../../types";

import {Card, Col, Container, Row} from "react-bootstrap";
import AppartmentForm from "./AppartmentForm";

const EditAppartment = () => {
  const navigate = useNavigate();
  const params = useParams();

  const defaultValues: CreateAppartmentInput = {city: "", address: "", rooms: 0, price: 0, hasAir: false, hasElevator: false, hasParking: false};
  const [appartment, setAppartment] = useState<CreateAppartmentInput>(defaultValues);

  const [loadAppartment, loadResult] = useLazyQuery<FindAppartmentQuery, FindAppartmentQueryVariables>(FIND_APPARTMENT, {
    fetchPolicy: "no-cache",
    onCompleted: (data: any) => {
      setAppartment({...data.appartment});
    },
  });
  
  const [editAppartment, updatedask] = useMutation<UpdateAppartmentMutation, UpdateAppartmentMutationVariables>(EDIT_APPARTMENT);

  useEffect(() => {
    loadAppartment({ variables: { id: params.id ||"" } });
  }, []);
  if (loadResult.loading) return <div>"Loading..."</div>;

  const handleSubmit = () => {
    if(appartment.city) {
      editAppartment({
        variables: {
          input: {
            _id: params.id || "",
            city: appartment.city,
            address: appartment.address,
            rooms: Number(appartment.rooms),
            price: Number(appartment.price),
            hasAir: appartment.hasAir,
            hasParking: appartment.hasParking,
            hasElevator: appartment.hasElevator
          },
        },
        refetchQueries: [{ query: GET_APPARTMENTS }],
      }).then((value) => {
        navigate("/appartments");
      });
    } else{
      alert("Name is required, sorry I wish I were more user friendly :(")
    }
  };
  return (
    <Container fluid>
      <Row>
        <Col md="3"/>
        <Col md="6">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Edit Appartment</Card.Title>
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
export default EditAppartment