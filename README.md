# 🌐 Web Development Learning Repository

A structured collection of projects, exercises, and experiments built while learning full-stack web development. This repository covers everything from core backend concepts with Node.js and Express, through database integration with PostgreSQL, API design, authentication, and modern frontend development with React.

---

## 📁 Repository Structure

```
webdev/
├── backend/          # Node.js & Express backend exercises and projects
├── Api/              # API consumption & Axios exercises
├── Authentication/   # Authentication levels, sessions, cookies & security
├── postgreeSql/      # PostgreSQL database exercises and projects
└── React/            # React.js components and projects
```

---

## 🗂️ Sections Overview

### 🖥️ Backend (`/backend`)

Node.js and Express.js fundamentals, covering server setup, routing, middleware, templating with EJS, and API interaction.

| Topic | Description |
|---|---|
| `2.1 Using Node` | Introduction to Node.js runtime |
| `2.2 Native Modules` | Built-in Node modules (fs, path, etc.) |
| `2.3 NPM` | Package management with npm |
| `2.4 QR Code Project` | CLI project generating QR codes |
| `3.1 Express Server` | Setting up an Express web server |
| `3.2 HTTP Requests` | Handling GET, POST, PUT, DELETE |
| `3.3 Postman` | API testing with Postman |
| `3.4 Middleware` | Express middleware patterns |
| `3.5 Secrets Project` | Mini project using environment secrets |
| `4.0 EJS` | Embedded JavaScript templating |
| `4.1 EJS Tags` | EJS syntax and tag types |
| `4.2 Passing Data` | Passing server-side data to views |
| `4.3 EJS Partials` | Reusable EJS partial templates |
| `4.4 Band Generator Project` | Full project using EJS templating |
| `5.2 JSON` | Working with JSON data |
| `5.3 Axios` | Making HTTP requests with Axios |
| `5.4 API Authentication` | Authenticating with third-party APIs |
| `5.5 REST APIs` | RESTful API design principles |
| `5.6 Secrets Project` | REST API integration project |
| `6.0 DIY API` | Building a custom API from scratch |
| `6.1 Blog API Project` | Full CRUD blog API project |
| `Project` | Capstone backend project |
| `kairo` | Personal side project |

---

### 🔌 API (`/Api`)

Focused exercises on API consumption using Axios and REST conventions.

| Topic | Description |
|---|---|
| `5.3 Axios` | HTTP requests with Axios |
| `Api` | API consumption exercises |

---

### 🔐 Authentication (`/Authentication`)

Progressive authentication implementation from basic username/password up to OAuth.

| Topic | Description |
|---|---|
| `9.1 Authentication Lv.1` | Basic username & password auth |
| `9.2 Authentication Lv.2` | Password hashing with bcrypt |
| `9.3 Sessions and Cookies` | Session management and cookies |
| `9.4 Environment Variables` | Securing secrets with `.env` |
| `9.5 Authentication Lv.3` | OAuth2 / Passport.js integration |

---

### 🐘 PostgreSQL (`/postgreeSql`)

Relational database concepts with PostgreSQL, including CRUD operations and real-world projects.

| Topic | Description |
|---|---|
| `8.2 Postgres Read` | Querying data from PostgreSQL |
| `8.3 Travel Tracker` | Full-stack travel tracking app |
| `8.5 Family Travel Tracker` | Extended travel tracker with multi-user support |
| `8.6 Permalist Project` | Persistent to-do list with PostgreSQL |
| `World Capital Quiz` | Quiz app backed by a PostgreSQL DB |
| `csv` | Importing/exporting CSV data to PostgreSQL |

---

### ⚛️ React (`/React`)

React.js fundamentals and component-driven UI development.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime for backend logic |
| **Express.js** | Web framework for building REST APIs & servers |
| **EJS** | Templating engine for server-rendered views |
| **Axios** | Promise-based HTTP client |
| **PostgreSQL** | Relational database |
| **bcrypt** | Password hashing |
| **Passport.js** | Authentication middleware (OAuth2) |
| **React** | Frontend UI library |
| **npm** | Package management |

---

## 🚀 Getting Started

Most projects in this repository use Node.js. To run any exercise:

```bash
# Navigate to the project folder
cd backend/3.1\ Express\ Server

# Install dependencies
npm install

# Start the server
node index.js
# or
npm start
```

> **Note:** Some projects require environment variables. Copy `.env.example` to `.env` and fill in the required values before running.

---

## 📌 Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/) (for database exercises)
- [Postman](https://www.postman.com/) (for API testing exercises)

---

## 👤 Author

**Prem Sahith**  
GitHub: [@PremSahith](https://github.com/PremSahith)
