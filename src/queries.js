import gql from 'graphql-tag';

const GET_WILLS = gql`
  query wills {
    getWills {
      id
      firstName
      middleName
      lastName
      suffix
      preferredName
      birthDate
      relationshipStatus
      hasChildren
      children {
        fullName
        birthDate
      }
      stateOfResidence
      hasAttorneyAddOn
      phoneNumber
      email
      isCompleted
      isEditable 
    }
  }
`;

// const GET_WILL = gql``;

// const CREATE_WILL = gql``;

// const UPDATE_WILL = gql``;

// const DELETE_WILL = gql``;

// const REGISTER_USER = gql``;

// const LOGIN_USER = gql``;

export { GET_WILLS };