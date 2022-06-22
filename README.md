## RWS-USERS Authentication system API using express JS || Node JS || MongoDB

## Description

This is a API used as a service to authenticate user before entering into any website.

## Deployment

Api is deployed on Heroku here is the URL : ``

## Instructions

If you would like to download the code and try it for yourself:

1. Clone the repo: `https://github.com/Akhilesh17-Tech/RWS_users_API.git`
2. Install packages: `npm install`
3. Launch: Run `npm start` to run server
4. Visit in your browser at: `http://localhost:8000`

## Routes

1. http://localhost:8000/users/register -> Api end point, we can use this to register user with there email id it should be unique by passing the details in request body.

1. http://localhost:8000/users/login -> Api end point, we can use this to login users with email and password just by passing the details in request body, password will be compare and decrypted.