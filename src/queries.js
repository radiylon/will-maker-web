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

const REGISTER_USER = gql`
  mutation registerUser($input: RegisterInput) {
    registerUser(input: $input) {
      id
      username
      email
      password
      token
      createdAt
      isAdmin
    }
  }
`;

const LOGIN_USER = gql`
  mutation loginUser($username: String, $password: String) {
    loginUser(username: $username, password: $password) {
      id
      username
      email
      password
      token
      isAdmin
    }
  }
`;

export { GET_WILLS, REGISTER_USER, LOGIN_USER };