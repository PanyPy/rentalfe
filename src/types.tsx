import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Appartment = {
  __typename?: 'Appartment';
  _id: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  hasAir: Scalars['Boolean'];
  hasElevator: Scalars['Boolean'];
  hasParking: Scalars['Boolean'];
  price: Scalars['Float'];
  rooms?: Maybe<Scalars['Float']>;
};

export type CreateAppartmentInput = {
  address?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  hasAir: Scalars['Boolean'];
  hasElevator: Scalars['Boolean'];
  hasParking: Scalars['Boolean'];
  price: Scalars['Float'];
  rooms?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAppartment: Appartment;
  removeAppartment: Appartment;
  updateAppartment: Appartment;
};


export type MutationCreateAppartmentArgs = {
  createAppartmentInput: CreateAppartmentInput;
};


export type MutationRemoveAppartmentArgs = {
  id: Scalars['String'];
};


export type MutationUpdateAppartmentArgs = {
  updateAppartmentInput: UpdateAppartmentInput;
};

export type Query = {
  __typename?: 'Query';
  appartment: Appartment;
  appartments: Array<Appartment>;
};


export type QueryAppartmentArgs = {
  id: Scalars['String'];
};

export type UpdateAppartmentInput = {
  _id: Scalars['String'];
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  hasAir?: InputMaybe<Scalars['Boolean']>;
  hasElevator?: InputMaybe<Scalars['Boolean']>;
  hasParking?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Float']>;
  rooms?: InputMaybe<Scalars['Float']>;
};

export type FindAppartmentQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindAppartmentQuery = { __typename?: 'Query', appartment: { __typename?: 'Appartment', _id: string, city: string, address?: string | null, rooms?: number | null, price: number, hasAir: boolean, hasParking: boolean, hasElevator: boolean } };

export type GetAppartmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAppartmentsQuery = { __typename?: 'Query', appartments: Array<{ __typename?: 'Appartment', _id: string, city: string, address?: string | null, rooms?: number | null, price: number, hasAir: boolean, hasParking: boolean, hasElevator: boolean }> };

export type CreateAppartmentMutationVariables = Exact<{
  input: CreateAppartmentInput;
}>;


export type CreateAppartmentMutation = { __typename?: 'Mutation', createAppartment: { __typename?: 'Appartment', _id: string, city: string, address?: string | null, rooms?: number | null, price: number, hasAir: boolean, hasParking: boolean, hasElevator: boolean } };

export type UpdateAppartmentMutationVariables = Exact<{
  input: UpdateAppartmentInput;
}>;


export type UpdateAppartmentMutation = { __typename?: 'Mutation', updateAppartment: { __typename?: 'Appartment', _id: string, city: string, address?: string | null, rooms?: number | null, price: number, hasAir: boolean, hasParking: boolean, hasElevator: boolean } };

export type DeleteAppartmentMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteAppartmentMutation = { __typename?: 'Mutation', removeAppartment: { __typename?: 'Appartment', _id: string } };


export const FindAppartmentDocument = gql`
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

/**
 * __useFindAppartmentQuery__
 *
 * To run a query within a React component, call `useFindAppartmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAppartmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAppartmentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindAppartmentQuery(baseOptions: Apollo.QueryHookOptions<FindAppartmentQuery, FindAppartmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAppartmentQuery, FindAppartmentQueryVariables>(FindAppartmentDocument, options);
      }
export function useFindAppartmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAppartmentQuery, FindAppartmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAppartmentQuery, FindAppartmentQueryVariables>(FindAppartmentDocument, options);
        }
export type FindAppartmentQueryHookResult = ReturnType<typeof useFindAppartmentQuery>;
export type FindAppartmentLazyQueryHookResult = ReturnType<typeof useFindAppartmentLazyQuery>;
export type FindAppartmentQueryResult = Apollo.QueryResult<FindAppartmentQuery, FindAppartmentQueryVariables>;
export const GetAppartmentsDocument = gql`
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

/**
 * __useGetAppartmentsQuery__
 *
 * To run a query within a React component, call `useGetAppartmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppartmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppartmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAppartmentsQuery(baseOptions?: Apollo.QueryHookOptions<GetAppartmentsQuery, GetAppartmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAppartmentsQuery, GetAppartmentsQueryVariables>(GetAppartmentsDocument, options);
      }
export function useGetAppartmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAppartmentsQuery, GetAppartmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAppartmentsQuery, GetAppartmentsQueryVariables>(GetAppartmentsDocument, options);
        }
export type GetAppartmentsQueryHookResult = ReturnType<typeof useGetAppartmentsQuery>;
export type GetAppartmentsLazyQueryHookResult = ReturnType<typeof useGetAppartmentsLazyQuery>;
export type GetAppartmentsQueryResult = Apollo.QueryResult<GetAppartmentsQuery, GetAppartmentsQueryVariables>;
export const CreateAppartmentDocument = gql`
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
export type CreateAppartmentMutationFn = Apollo.MutationFunction<CreateAppartmentMutation, CreateAppartmentMutationVariables>;

/**
 * __useCreateAppartmentMutation__
 *
 * To run a mutation, you first call `useCreateAppartmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAppartmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAppartmentMutation, { data, loading, error }] = useCreateAppartmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAppartmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateAppartmentMutation, CreateAppartmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAppartmentMutation, CreateAppartmentMutationVariables>(CreateAppartmentDocument, options);
      }
export type CreateAppartmentMutationHookResult = ReturnType<typeof useCreateAppartmentMutation>;
export type CreateAppartmentMutationResult = Apollo.MutationResult<CreateAppartmentMutation>;
export type CreateAppartmentMutationOptions = Apollo.BaseMutationOptions<CreateAppartmentMutation, CreateAppartmentMutationVariables>;
export const UpdateAppartmentDocument = gql`
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
export type UpdateAppartmentMutationFn = Apollo.MutationFunction<UpdateAppartmentMutation, UpdateAppartmentMutationVariables>;

/**
 * __useUpdateAppartmentMutation__
 *
 * To run a mutation, you first call `useUpdateAppartmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAppartmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAppartmentMutation, { data, loading, error }] = useUpdateAppartmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAppartmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAppartmentMutation, UpdateAppartmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAppartmentMutation, UpdateAppartmentMutationVariables>(UpdateAppartmentDocument, options);
      }
export type UpdateAppartmentMutationHookResult = ReturnType<typeof useUpdateAppartmentMutation>;
export type UpdateAppartmentMutationResult = Apollo.MutationResult<UpdateAppartmentMutation>;
export type UpdateAppartmentMutationOptions = Apollo.BaseMutationOptions<UpdateAppartmentMutation, UpdateAppartmentMutationVariables>;
export const DeleteAppartmentDocument = gql`
    mutation deleteAppartment($id: String!) {
  removeAppartment(id: $id) {
    _id
  }
}
    `;
export type DeleteAppartmentMutationFn = Apollo.MutationFunction<DeleteAppartmentMutation, DeleteAppartmentMutationVariables>;

/**
 * __useDeleteAppartmentMutation__
 *
 * To run a mutation, you first call `useDeleteAppartmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAppartmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAppartmentMutation, { data, loading, error }] = useDeleteAppartmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAppartmentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAppartmentMutation, DeleteAppartmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAppartmentMutation, DeleteAppartmentMutationVariables>(DeleteAppartmentDocument, options);
      }
export type DeleteAppartmentMutationHookResult = ReturnType<typeof useDeleteAppartmentMutation>;
export type DeleteAppartmentMutationResult = Apollo.MutationResult<DeleteAppartmentMutation>;
export type DeleteAppartmentMutationOptions = Apollo.BaseMutationOptions<DeleteAppartmentMutation, DeleteAppartmentMutationVariables>;