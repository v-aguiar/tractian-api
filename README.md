<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://cdn-icons-png.flaticon.com/512/2385/2385061.png" alt="Project logo"></a>
</p>

<h3 align="center">Tractian Management Api</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/v-aguiar/tractian-api.svg)]()
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/v-aguiar/tractian-api.svg)]()

</div>

---

<p align="center"> Assets management API made easy for any company that needs top level maintanance as fast as it can be.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Built Using](#built_using)

## 🧐 About <a name = "about"></a>

Api for assets management, where a user, as a part of a company, can add, update, check and delete assets and it's data.

## 🏁 Getting Started <a name = "getting_started"></a>

This API data is deployed on heroku, and you should be able to access all the endpoints and data on the link below:

<br>Heroku deploy: </br> https://tractian-api-db.herokuapp.com/
## 🟢 Endpoints

### <b>Companies</b>

<br>

> <b>POST /companies</b>

Create a new company

- Body:

  ```json
  {
    "name": "string",
    "cnpj": "string"
  }
  ```

- Requirements :

  ```json
  {
    "name": "required",
    "cnpj": "required, 14 numeric characters only"
  }
  ```

<br>

> <b>GET by CNPJ /companies/:cnpj</b>

Get a registered company data by it's CNPJ

- Params:

  ```json
  {
    "cnpj": "string"
  }
  ```

- Requirements :

  ```json
  {
    "cnpj": "required, 14 numeric characters only"
  }
  ```

### <b>Users</b>

<br>

> <b>POST /users</b>

Create a new user

- Body:

  ```json
  {
    "name": "string",
    "cpf": "string",
    "phoneNumber": "string",
    "role": "string",
    "companyId": "string"
  }
  ```

- Requirements :

  ```json
  {
    "name": "required",
    "cpf": "required, 11 numeric characters only",
    "phoneNumber": "required, 11 numeric characters only",
    "role": "required",
    "companyId": "required, must be a valid company id"
  }
  ```

<br>

> <b>GET by CPF /users/:cpf</b>

Get a registered user data by it's CPF

- Params:

  ```json
  {
    "cpf": "string"
  }
  ```

- Requirements :

  ```json
  {
    "cpf": "required, 11 numeric characters only"
  }
  ```

<br>

> <b>GET Company by user CPF /users/:cpf/company</b>

Get a registered company data by it's user's CPF

- Params:

  ```json
  {
    "cpf": "string"
  }
  ```

- Requirements :

  ```json
  {
    "cpf": "required, 11 numeric characters only"
  }
  ```

<br>

> <b>PUT Update user data /users/:cpf</b>

Update a registered user data by it's CPF

- Params:

  ```json
  {
    "cpf": "string"
  }
  ```

- Requirements :

  ```json
  {
    "cpf": "required, 11 numeric characters only"
  }
  ```

- Body:

  ```json
  {
    "name": "string",
    "phoneNumber": "string",
    "role": "string"
  }
  ```

<br>

> <b>DELETE Delete user /users/:cpf</b>

Delete a registered user by it's CPF

- Params:

  ```json
  {
    "cpf": "string"
  }
  ```

- Requirements :

  ```json
  {
    "cpf": "required, 11 numeric characters only"
  }
  ```

### <b>Units</b>

<br>

> <b>POST /units</b>

Create a new unit of a registered company

- Body:

  ```json
  {
    "name": "string",
    "address": "string",
    "companyId": "string"
  }
  ```

- Requirements :

  ```json
  {
    "name": "required",
    "address": "required",
    "companyId": "required, must be a valid company id"
  }
  ```

<br>

> <b>GET unit by name /units/:name</b>

Get a registered unit data by it's name

- Params:

  ```json
  {
    "name": "string"
  }
  ```

- Requirements :

  ```json
  {
    "name": "required"
  }
  ```

<br>

> <b>GET units by CompanyId /units/company</b>

Get all registered units data by it's company id

- Headers:

  ```json
  {
    "company-id": "string"
  }
  ```

- Requirements :

  ```json
  {
    "company-id": "required, must be a valid company id"
  }
  ```

<br>

### <b>Assets</b>

<br>

> <b>POST /assets</b>

Register one or more assets for a registered unit

- Body:

  ```json
  [
    {
      "name": "string",
      "alias": "string",
      "model": "string",
      "images": ["string"],
      "description": "string",
      "status": "string",
      "healthLevel": "number",
      "ownerId": "string",
      "unitId": "string"
    }
  ]
  ```

- Requirements :

  ```json
  {
    "name": "required",
    "alias": "required",
    "model": "required",
    "images": "required, array of strings, must have at least one image",
    "description": "required",
    "status": "required, must be one of the following: 'RUNNING', 'ALERTING', 'STOPPED'",
    "healthLevel": "required, must be a number between 0 and 100",
    "ownerId": "required, must be a valid user id",
    "unitId": "required, must be a valid unit id"
  }
  ```

<br>

> <b>GET asset by alias /assets</b>

Get a registered asset data by it's alias

- Headers:

  ```json
  {
    "asset-alias": "string"
  }
  ```

- Requirements :

  ```json
  {
    "asset-alias": "required"
  }
  ```

<br>

> <b>GET assets by unitId /assets/:unitId</b>

Get all assets from a registered unit

- Params:

  ```json
  {
    "unitId": "string"
  }
  ```

- Requirements :

  ```json
  {
    "unitId": "required, must be a valid unit id"
  }
  ```

<br>

> <b>PUT update asset data /assets</b>

Update a registered asset data by it's alias

- Headers:

  ```json
  {
    "asset-alias": "string"
  }
  ```

- Requirements :

  ```json
  {
    "asset-alias": "required, must an alias of a registered asset"
  }
  ```

<br>

> <b>DELETE delete asset /assets</b>

Delete a registered asset by it's alias

- Headers:

  ```json
  {
    "asset-alias": "string"
  }
  ```

- Requirements :

  ```json
  {
    "asset-alias": "required, must an alias of a registered asset"
  }
  ```

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Prisma](https://www.prisma.io/) - Database ORM
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [TypeScript](https://www.typescriptlang.org/) - Language
- [Heroku](https://www.heroku.com/) - Deployment
- [Github Workflow](https://docs.github.com/en/actions) - CD
