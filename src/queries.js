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

export { GET_WILLS };