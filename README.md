

# Installation

```bash
$ npm install
```

# Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# API ENDPOINTS

## Users Endpoints:

### Create User

Method: POST

URL: http://localhost:3000/users

Body:json

```bash
{
    "name": "test",
    "email": "test@gmail.com",
    "age": 30
}
```

### Get All Users

Method: GET

URL: http://localhost:3000/users

### Get User by ID

Method: GET

URL: http://localhost:3000/users/:id

### Update User

Method: PUT

URL: http://localhost:3000/users/:id

Body:json

```bash
{
    "name": "test",
    "email": "test@gmail.com",
    "age": "28"
}
```

### Delete User

Method: DELETE

URL: http://localhost:3000/users/:id

## Wallet Address Endpoints:

### Create Wallet Address

Method: POST

URL: http://localhost:3000/wallet-address

Body:json

```bash
{
    "userId": "string",
    "address": "string",
    "balance": "number",
    "currency": "string"
}
```

### Get All Wallet Addresses

Method: GET

URL: http://localhost:3000/wallet-address


### Get Wallet Address by ID

Method: GET

URL: http://localhost:3000/wallet-address/:id


### Update Wallet Address

Method: PUT
URL: http://localhost:3000/wallet-address/:id

Body:json
```bash
{
    "address": "string",
    "balance": "number",
    "currency": "string"
}
```

### Delete Wallet Address

Method: DELETE
URL: http://localhost:3000/wallet-address/:id



