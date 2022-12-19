<h1 align="center">
   User CRUD and Login
</h1>

Project develop using NodeJS and Express to create an API where the client can create a user, update and delete its informations. The admin user can view, update and delete informations from all users. The project was made usign TypeScript, TypeORM, bcryptjs, express-async-erros, yup, jsonwebtoken, dotenv and pg. 

base URL: <a> http://localhost:3000 </a>

## Routes: 
**POST** /users <br>
Route to create a new user.

Request format: 
```json
{
  "name": "name",
  "email": "email@mail.com",
  "password": "1234",
  "isAdm": "false"
}
```
Response:
```json
201 
{
  "name": "name",
  "email": "email@mail.com",
  "isAdm": "false", 
  "isActive": "true", 
  "createdAt": "2022-12-16T18:17:56.659Z",
  "UpdatedAt": "2022-12-16T18:17:56.659Z", 
  "id": "f1fabe0f-73c9-433f-adf8-4162a6f464e2"
}
```

<br>

**POST** /login <br>
Route to create a new session for the user.

Request format: 
```json
{
  "email": "email@mail.com",
  "password": "1234",
}
```
Response:
```json
200
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlM0BtYWlsLmNvbSIsImlhdCI6MTY3MTIyNDI2NSwiZXhwIjoxNjcxMzEwNjY1LCJzdWIiOiJiMzE2YzMxNS1kMTZjLTRlMzktODU0My1iNzkyNjk2M2E0MGMifQ.XrAfBP5JCyeshuMaguqdBnAb8OX4VAYV-5-EpcksAs8"
}
```

<br>

***GET*** /users <br>
Route to list all users. Must be admin to access.

Response:
```json
200
[
  {
    "updatedAt": "2022-12-15T15:55:13.721Z",
    "createdAt": "2022-12-15T15:55:13.721Z",
    "isActive": true,
    "isAdm": false,
    "email": "teste2@mail.com",
    "name": "teste",
    "id": "74435643-9a21-4b84-9554-ac222b71f033"
  },
  {
    "updatedAt": "2022-12-15T21:21:04.069Z",
    "createdAt": "2022-12-15T21:21:04.069Z",
    "isActive": true,
    "isAdm": true,
    "email": "teste3@mail.com",
    "name": "teste",
    "id": "b316c315-d16c-4e39-8543-b7926963a40c"
  },
  {
    "updatedAt": "2022-12-16T00:06:06.194Z",
    "createdAt": "2022-12-16T00:06:06.194Z",
    "isActive": true,
    "isAdm": true,
    "email": "teste4@mail.com",
    "name": "teste",
    "id": "11bb29b4-f354-41aa-98d3-4c5aae2ec5a2"
  }
]
```
<br>

***PATCH*** /users/:userId <br>
Route to edit user information. Must be admin or owner of the resource to access. 

Request format: 
```json
{
  "email": "newemail@mail.com"
}
```

Response:
```json
200
{
  "name": "name",
  "email": "newemail@mail.com",
  "isAdm": "false", 
  "isActive": "true", 
  "createdAt": "2022-12-16T18:17:56.659Z",
  "UpdatedAt": "2022-12-16T18:17:56.659Z", 
  "id": "f1fabe0f-73c9-433f-adf8-4162a6f464e2"
}
```

<br>

***DELETE*** /users/:userId <br>
Route to delete user - change its atribute "isActive" to false. Must be admin do access. 

Response: 
```json
204
```


