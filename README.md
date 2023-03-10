# Dayum Chat (Bakcend)

<!-- Logo -->

<!-- Table of Contents -->
## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#requirements">Requirements</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#setup-env-example">Setup .env example</a></li>
      </ul>
    </li>
    <li><a href="#rest-api">REST API</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#related-project">Related Projects</a></li>
  </ol>
</details>

<!-- About The Project -->
## About The Project
Telegram Backend is a RESTful API used in Telegram Chat. This API handles every functions in Telegram Application, such as login, register, update profile, get lists of contacts and chat, and send message to other user.

### Built With
This app was built with some technologies below:
- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Socket.io](https://socket.io)
- [ESLint](https://eslint.org/)
- [PostgreSQL](https://www.postgresql.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Getting Started -->
## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* [Node.js](https://nodejs.org/en/download/)
* [Express.js](https://expressjs.com/en/starter/installing.html)
* [PostgreSQL](https://www.postgresql.org/download/)
* [Socket.io](https://socket.io/docs/v4/server-api/)

### Installation

- Clone the repository
```
git clone https://github.com/alfatpololo/damn-chat-backend-deploy
```
- Go to repository folder
```
cd whirlpool-api
```
- Install Module
```
npm install / npm i
```
- Make a new database
- <a href="#setup-env-example">Setup .env</a>
- Type ` npm run dev` To Start Development
- Type ` npm run start` To Start Production

<p align="right">(<a href="#top">back to top</a>)</p>

### Setup .env example

Create .env file in your root project folder.

```env
# app
PORT = yourBEport

# database
DB_USERNAME = yourPSQLusername
DB_HOST = yourhostingdomain
DB_DATABASE = yourdbname
DB_PASSWORD = yourPSQLpassword
DB_PORT = yourPSQLport
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- REST API -->
## REST API

You can view my Postman collection [here](Whirlpool.postman_collection.json)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Contributing -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Related Projects -->
## Related Project
:rocket: [`Dayum Chat (Frontend)`](https://github.com/alfatpololo/damn-chat-frontend-deploy)

:rocket: [`Dayum Chat App Demo`](https://damn-chat-frontend-deploy.vercel.app/)

<p align="right">(<a href="#top">back to top</a>)</p>
