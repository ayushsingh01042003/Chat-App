# Chat App

A real-time chat application supporting single-user messaging and group chats. This project is built using modern web technologies for both frontend and backend, ensuring high performance and scalability.

## Tech Stack

### Frontend
- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **ShadCN**

### Backend
- **TypeScript**
- **Express.js**
- **PostgreSQL**
- **Prisma** (ORM)
- **WebSockets** (for real-time communication)

### Monitoring
- **Prometheus**

### Other Tools
- **Docker** (Containerization)
- **CI/CD Pipelines** (Automated Deployment)

## Features
- **User Authentication** using JWT
- **One-on-One Messaging**
- **Group Chats**
- **Real-time Communication** via WebSockets

## Development Setup

### Environment Variables
Ensure you have the following environment variables configured:

```env
DATABASE_URL=<your_postgres_database_url>
PORT=<your_backend_port>
JWT_SECRET=<your_jwt_secret>
POSTGRES_USER=<your_postgres_username>
POSTGRES_PASSWORD=<your_postgres_password>
POSTGRES_DB=<your_postgres_database_name>
```

### Running Locally

#### Frontend
```sh
cd frontend
npm install
npm run dev
```

#### Backend
```sh
cd backend
npm install
npm run build
npm run dev
```

## Docker Setup
To run the application using Docker:

```sh
docker compose build
docker compose up -d
```

This will build and start the services in detached mode.

## Contributing
If you’d like to contribute, please fork the repository and submit a pull request with detailed explanations of your changes.

## License
This project is licensed under the MIT License.

---

For any issues or feature requests, feel free to open an issue on the [GitHub repository](https://github.com/ayushsingh01042003/Chat-App).

