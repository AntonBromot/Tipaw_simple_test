# Tipaw test 

## Getting Started

### Prerequisites

- Docker is require

- The project use express server

### Installing

#### Run backend first

##### Move to backend catalog

```
$ cd backend
```

##### Build docker container

```
$ docker-compose build
```

##### Run docker container

```
$ docker-compose up
```

#####  Server running on "http://localhost:3000"
#####  Admin mongo running on "http://localhost:1234"


#### When backend is runing - run frontend

##### Move to frontend catalog

```
$ cd frontend
```

##### Install dependencies

```
$ npm install
```

##### Run development server

```
$ npm run dev-hot
```

##### Development server will run at "http://localhost:9000"



