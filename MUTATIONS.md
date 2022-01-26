# Mutations examples

```graphql
mutation {
  createUser(
    createUserInput: {
      firstName: "First"
      lastName: "Last"
      email: "test"
      password: "none"
    }
  ) {
    _id
    firstName
    lastName
    email
    password
  }
}
```
