import gql from 'graphql-tag';

// const GET_WILL = gql`
//   query getWill($id: ID!) {
    
//   }
// `;

const CREATE_WILL = gql`
  mutation createWill($input: WillInput) {
    createWill(input: $input) {
      id
      firstName
      middleName
      lastName
      suffix
      preferredName
      birthDate
      phoneNumber
      email
      relationshipStatus
      hasChildren
      stateOfResidence
      hasAttorneyAddOn
      isCompleted
      isEditable
      createdAt
    }
  }
`;

export { CREATE_WILL };