import {Button, Col, Form} from "react-bootstrap";
import { CreateAppartmentInput, UpdateAppartmentInput } from "../../types";

// sorry guys, unfortunately I don't have enough time to fix types
type AppartmentFormProps = {
  setAppartment: any;
  handleSubmit: any;
  appartment: CreateAppartmentInput | UpdateAppartmentInput;
};

const TaskForm = (props: AppartmentFormProps) => {

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>City*</Form.Label>
        <Form.Control 
          required
          type="string" 
          placeholder="Enter the City" 
          value={props.appartment?.city || ""}
          onChange={(e)=>{
            const newValue = e.target.value;
            props.setAppartment({...props.appartment, city: newValue})
          }} 
        />
        <Form.Text className="text-muted">
          We'll never share your data with anyone else. ;)
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address*</Form.Label>
        <Form.Control 
          required
          type="string" 
          placeholder="Enter the address" 
          value={props.appartment?.address || ""}
          onChange={(e)=>{
            const newValue = e.target.value;
            props.setAppartment({...props.appartment, address: newValue})
          }} 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Rooms</Form.Label>
        <Form.Control 
          required
          type="number" 
          placeholder="Enter Rooms" 
          value={props.appartment?.rooms || 0}
          onChange={(e)=>{
            const newValue = e.target.value;
            props.setAppartment({...props.appartment, rooms: newValue})
          }} 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control 
          required
          type="number" 
          placeholder="Enter the price" 
          value={props.appartment?.price || 0}
          onChange={(e)=>{
            const newValue = e.target.value;
            props.setAppartment({...props.appartment, price: newValue})
          }} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Col md="3">
          <Form.Check type="checkbox" label="has Air?" 
          checked={!!props.appartment.hasAir} 
            onChange={(e)=>{
              props.setAppartment({...props.appartment, hasAir: !props.appartment.hasAir})
            }} 
          />
        </Col>
        <Col md="3">
          <Form.Check type="checkbox" label="has Parking?"
            checked={!!props.appartment.hasParking} 
            onChange={(e)=>{
              props.setAppartment({...props.appartment, hasParking: !props.appartment.hasParking})
            }} 
          />
        </Col>
        <Col md="3">
          <Form.Check type="checkbox" label="has Elevator?"
          checked={!!props.appartment.hasElevator} 
            onChange={(e)=>{
              props.setAppartment({...props.appartment, hasElevator: !props.appartment.hasElevator})
            }} 
          />
        </Col>
      </Form.Group>
      
      <Button variant="primary" onClick={props.handleSubmit}>
        Submit
      </Button>
    </Form>
  )
}
export default TaskForm