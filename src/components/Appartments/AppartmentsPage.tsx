import { useNavigate } from "react-router-dom";
import {Button, Card, Col, Container, Form, Row, Table} from "react-bootstrap";

import { useMutation, useQuery } from '@apollo/client';
import { DELETE_APPARTMENT, GET_APPARTMENTS } from "../../queries/Appartments";
import { Appartment, DeleteAppartmentMutation, DeleteAppartmentMutationVariables, GetAppartmentsQuery } from "../../types";
import { useState } from "react";

const AppartmentsPage = () => {
  const navigate = useNavigate();
  const getTasksQuery = useQuery<GetAppartmentsQuery>(GET_APPARTMENTS);
  const [deleteAppartment, deletedAppartment] = useMutation<DeleteAppartmentMutation, DeleteAppartmentMutationVariables>(DELETE_APPARTMENT, {refetchQueries: [{ query: GET_APPARTMENTS }]});
  const [filterCity, setFilterCity] = useState("");
  const [filterAddress, setFilterAddress] = useState("");
  const [filterRooms, setFilterRooms] = useState(0);
  const [filterPrice, setFilterPrice] = useState(0);

  if (getTasksQuery.loading) return <p>Loading...</p>;
  if (getTasksQuery.error) return <p>Error :(.. Please don't mess the database, just clean up and restart (this is not a real worl app)</p>;

  const handleDelete = (id: string) => deleteAppartment({ variables: { id: id } });
  const loadAmenities = (...amenities: any) => {
    return amenities.filter((amenity: any) => amenity).join(", ");
  };

  const appartmentLists = 
    getTasksQuery.data?.appartments
    .filter(appartment => (appartment.address?.toLowerCase().includes(filterAddress)))
    .filter(appartment => (appartment.city.toLowerCase().includes(filterCity)))
    .filter(appartment => (filterRooms === 0 || appartment.rooms == filterRooms))
    .filter(appartment => (filterPrice === 0 || appartment.price > filterPrice));

  return (
    <Container>
      <Row>
        <Col md="12">
          <Card className="strpied-tabled-with-hover">
            <Card.Header>
              <Card.Title as="h4">
                Appartment List
                <Button style={{marginLeft: 10}} variant="outline-primary" onClick={() => navigate("/appartments/create")}>New Appartment</Button>
              </Card.Title>
              <p className="cardu-category">
                ({appartmentLists?.length}) appartments
                <br />
                Note: ID should NEVER be exposed, and search MUST be paginated in the BACK END
              </p>

              <Row>
                <Col md ="3">
                  <Form.Group className="mb-3">
                    <Form.Label>Search City</Form.Label>
                    <Form.Control 
                      required
                      type="string" 
                      placeholder="Search by City" 
                      value={filterCity || ""}
                      onChange={(e)=>{
                        const newValue = e.target.value;
                        setFilterCity(newValue)
                      }} 
                    />
                  </Form.Group>
                </Col>
                <Col md ="3">
                <Form.Group className="mb-3">
                  <Form.Label>Search Address</Form.Label>
                    <Form.Control 
                      required
                      type="string" 
                      placeholder="Search by Address" 
                      value={filterAddress || ""}
                      onChange={(e)=>{
                        const newValue = e.target.value;
                        setFilterAddress(newValue)
                      }} 
                    />
                  </Form.Group>
                </Col>
                <Col md ="3">
                  <Form.Group className="mb-3">
                    <Form.Label>Search by Rooms</Form.Label>
                    <Form.Control 
                      required
                      type="number" 
                      placeholder="Search by Rooms" 
                      value={filterRooms || 0}
                      onChange={(e)=>{
                        const newValue = e.target.value;
                        setFilterRooms(Number(newValue))
                      }} 
                    />
                  </Form.Group>
                </Col>
                <Col md ="3">
                  <Form.Group className="mb-3">
                    <Form.Label>Search By Price ></Form.Label>
                    <Form.Control 
                      required
                      type="number" 
                      placeholder="Search by Rooms" 
                      value={filterPrice || 0}
                      onChange={(e)=>{
                        const newValue = e.target.value;
                        setFilterPrice(Number(newValue))
                      }} 
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body className="table-full-width table-responsive">
              <Table responsive="xl">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>City</th>
                    <th>Address</th>
                    <th>Rooms</th>
                    <th>Price</th>
                    <th>Amenities</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    appartmentLists?.map((appartment) => (
                      <tr key={appartment._id}>
                        <td>{appartment._id}</td>
                        <td>{appartment.city}</td>
                        <td>{appartment.address}</td>
                        <td>{appartment.rooms}</td>
                        <td>{appartment.price}</td>
                        {/* I know this is not scalable but I just made it work */}
                        <td>{loadAmenities(appartment.hasAir && 'air condition', appartment.hasElevator && 'elevator', appartment.hasParking && 'parking')}</td>
                        <td>
                          <Button className="btn-fill btn-sm" onClick={() => navigate(`/appartments/${appartment._id}/edit`)} variant="outline-success">Edit</Button>
                          <Button className="btn-sm"  variant="danger" onClick={ () => handleDelete(appartment._id)}>Delete</Button>
                        </td>
                      </tr>
                    ))
                  }  
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AppartmentsPage;

function amenity(amenity: any, arg1: (any: any) => any) {
  throw new Error("Function not implemented.");
}
