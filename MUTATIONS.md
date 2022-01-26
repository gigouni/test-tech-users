# Mutations examples

```graphql
mutation {
  createUser(
    createUserInput: {
      firstName: "Fourth"
      lastName: "Last"
      email: "test"
      password: "none"
    }
  ) {
    id
    firstName
    lastName
    email
    password
  }
}

mutation {
  updateUser(
    updateUserInput: {
      id: "61f1c26b93bbd83ccd090139"
      firstName: "Fifth"
      lastName: "Last"
      email: "test"
      password: "new one"
    }
  ) {
    id
    firstName
    lastName
    email
    password
  }
}

mutation {
  removeUser (id: "61f1b659804d17906ef12a64")
}
```
