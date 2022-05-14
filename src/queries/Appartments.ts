import {gql } from '@apollo/client';

export const FIND_APPARTMENT = gql`
  query findAppartment($id: String!) {
    appartment(id: $id) {
      _id
      city
      address
      rooms
      price
      hasAir
      hasParking
      hasElevator
    }
  }
`;

export const GET_APPARTMENTS = gql`
  query getAppartments {
    appartments {
      _id
    city
    address
    rooms
    price
    hasAir
    hasParking
    hasElevator
    }
  }
`;

export const CREATE_APPARTMENT = gql`
  mutation createAppartment($input: CreateAppartmentInput!) {
    createAppartment(createAppartmentInput: $input) {
      _id
      city
      address
      rooms
      price
      hasAir
      hasParking
      hasElevator
    }
  }
`;

export const EDIT_APPARTMENT = gql`
  mutation updateAppartment($input: UpdateAppartmentInput!) {
    updateAppartment(updateAppartmentInput: $input) {
      _id
      city
      address
      rooms
      price
      hasAir
      hasParking
      hasElevator
    }
  }
`;

export const DELETE_APPARTMENT = gql`
  mutation deleteAppartment($id: String!) {
    removeAppartment(id: $id) {
      _id
    }
  }
`;