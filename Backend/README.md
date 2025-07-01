1> First, you need to set up Redis for server-side sessions.
2> If you want to store session data on the server (instead of on the client), server-side sessions using Redis are a better option.

3> You need to create a Redis server using Docker.
Docker allows you to run Redis without installing it manually on your system.

Download Docker from the official website:
👉 https://www.docker.com/products/docker-desktop



Run Redis with Docker

Pull Redis image: 
1> docker pull redis

Run Redis container:
2> docker run -d --name my-redis -p 6379:6379 redis

Connect to Redis using CLI:
3> redis-cli -h localhost -p 6379

Start the Redis container (if stopped):
4> docker start my-redis

(Optional) Stop the Redis container:
5>docker stop my-redis

(Optional) List all running containers:
6>docker ps


Set Up Flask Database Migration

Set the Flask app environment variable (for Windows PowerShell):
1> $env:FLASK_APP = "run.py"

(Optional) Check the current value of FLASK_APP:
2>echo $env:FLASK_APP

Initialize the migration folder:
3> flask db init

Create the first migration
4>flask db migrate -m "Initial"

Create a migration when you add new fields:
5>flask db migrate -m "Add new fields"

Apply the migration to the database (commit changes):
6>flask db upgrade

Default Test User (For Development Only)

Email: admin@gmail.com

Password: admin123

Role: admin


