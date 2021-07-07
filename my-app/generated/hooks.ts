import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Booking = {
  __typename?: 'Booking';
  customerId?: Maybe<Scalars['Int']>;
  resourceId: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  seatNumber?: Maybe<Scalars['Int']>;
};

export type Customer = {
  __typename?: 'Customer';
  name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  issuer?: Maybe<Scalars['String']>;
  credits?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCustomer?: Maybe<Customer>;
};


export type MutationAddCustomerArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getCustomerByEmail?: Maybe<Customer>;
};


export type QueryGetCustomerByEmailArgs = {
  email: Scalars['String'];
};

export type Resource = {
  __typename?: 'Resource';
  category?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  slotIntervalMinutes?: Maybe<Scalars['Int']>;
  slotDurationMinutes?: Maybe<Scalars['Int']>;
  seats: Scalars['Int'];
};

export type AddCustomerMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
}>;


export type AddCustomerMutation = (
  { __typename?: 'Mutation' }
  & { addCustomer?: Maybe<(
    { __typename?: 'Customer' }
    & Pick<Customer, 'name' | 'email' | 'phoneNumber' | 'issuer' | 'credits'>
  )> }
);

export type GetCustomerByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetCustomerByEmailQuery = (
  { __typename?: 'Query' }
  & { getCustomerByEmail?: Maybe<(
    { __typename?: 'Customer' }
    & Pick<Customer, 'name' | 'email' | 'phoneNumber' | 'issuer' | 'credits'>
  )> }
);


export const AddCustomerDocument = gql`
    mutation addCustomer($name: String!, $email: String!, $phoneNumber: String) {
  addCustomer(name: $name, email: $email, phoneNumber: $phoneNumber) {
    name
    email
    phoneNumber
    issuer
    credits
  }
}
    `;
export type AddCustomerMutationFn = Apollo.MutationFunction<AddCustomerMutation, AddCustomerMutationVariables>;

/**
 * __useAddCustomerMutation__
 *
 * To run a mutation, you first call `useAddCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCustomerMutation, { data, loading, error }] = useAddCustomerMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useAddCustomerMutation(baseOptions?: Apollo.MutationHookOptions<AddCustomerMutation, AddCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCustomerMutation, AddCustomerMutationVariables>(AddCustomerDocument, options);
      }
export type AddCustomerMutationHookResult = ReturnType<typeof useAddCustomerMutation>;
export type AddCustomerMutationResult = Apollo.MutationResult<AddCustomerMutation>;
export type AddCustomerMutationOptions = Apollo.BaseMutationOptions<AddCustomerMutation, AddCustomerMutationVariables>;
export const GetCustomerByEmailDocument = gql`
    query getCustomerByEmail($email: String!) {
  getCustomerByEmail(email: $email) {
    name
    email
    phoneNumber
    issuer
    credits
  }
}
    `;

/**
 * __useGetCustomerByEmailQuery__
 *
 * To run a query within a React component, call `useGetCustomerByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetCustomerByEmailQuery(baseOptions: Apollo.QueryHookOptions<GetCustomerByEmailQuery, GetCustomerByEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomerByEmailQuery, GetCustomerByEmailQueryVariables>(GetCustomerByEmailDocument, options);
      }
export function useGetCustomerByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerByEmailQuery, GetCustomerByEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomerByEmailQuery, GetCustomerByEmailQueryVariables>(GetCustomerByEmailDocument, options);
        }
export type GetCustomerByEmailQueryHookResult = ReturnType<typeof useGetCustomerByEmailQuery>;
export type GetCustomerByEmailLazyQueryHookResult = ReturnType<typeof useGetCustomerByEmailLazyQuery>;
export type GetCustomerByEmailQueryResult = Apollo.QueryResult<GetCustomerByEmailQuery, GetCustomerByEmailQueryVariables>;