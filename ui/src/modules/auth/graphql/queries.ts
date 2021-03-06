const currentUser = `
  query currentUser {
    currentUser {
      _id
      username
      email
      isOwner
      brands {
        _id
        name
      }
      details {
        avatar
        fullName
        shortName
        position
        location
        description
      }
      links
      emailSignatures
      getNotificationByEmail
      permissionActions
      configs
      configsConstants
    }
  }
`;

export default { currentUser };
