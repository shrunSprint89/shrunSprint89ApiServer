[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/Vp8hse?referralCode=vimo)

# OpenAI Express Server

This is an express RESTful API project, using Node.js and [Express](https://expressjs.com/), written in JavaScript.

## Includes

### Server utilites:

- [morgan](https://www.npmjs.com/package/morgan)- HTTP request logger middleware for Node.js
- [dotenv](https://www.npmjs.com/package/dotenv)- Loads environment variables from `.env` file into `process.env`
- [cors](https://www.npmjs.com/package/cors)- CORS provides a Connect/Express middleware that can be used to enable CORS with various options.
- [openai](https://www.npmjs.com/package/openai)- This library provides convenient access to the OpenAI REST API from TypeScript or JavaScript.

### Development utilites

- [nodemon](https://www.npmjs.com/package/nodemon)- Helps develop node.js based application by automatically restarting the node server when it detects application file changes.

## Commands

### Setup

```
yarn
```

### Development

```
yarn dev
```

## About

The server runs a simple Express API server

- `/` returns `status: ok`
- `/openai` talks to OpenAI server with API key taken from Environment variable, and initiates a chat completions API call, with function added in tools, to get a path to navigate to in a frontend application
- Unknown endpoints are handled in a middleware file.

## Project Structure

```
src\
 |--routes\         # Routes
 |--utils\          # Utility files
 |--app.js          # Express app
 |--index.js        # App entry point
```
