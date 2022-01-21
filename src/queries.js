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

const GET_WILL = gql`
  query getWill($id: ID!) {
    getWill(id: $id) {
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

const GET_WILL_BY_USER_ID = gql`
  query getWillByUserId($id: ID!) {
    getWillByUserId(id: $id) {
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

const CREATE_WILL = gql`
  mutation createWill($input: WillInput) {
    createWill(input: $input) {
      id
      firstName
      lastName
      suffix
      preferredName
      email
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
      isCompleted
      isEditable  
    }
  }
`;

const UPDATE_WILL = gql`
  mutation updateWill($id: ID!, $input: WillInput) {
    updateWill(id: $id, input: $input) {
      id
    }
  }
`;

const DELETE_WILL = gql`
  mutation deleteWill($id: ID!) {
    deleteWill(id: $id) {
      id
    }
  }
`;

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

export { GET_WILLS, GET_WILL, GET_WILL_BY_USER_ID, CREATE_WILL, UPDATE_WILL, DELETE_WILL, REGISTER_USER, LOGIN_USER };