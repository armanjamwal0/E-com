1> First you need to set up redis for Server-side Session If You want to to user session in server it is better then client-side server 

2> You need create A Redis server for storing user session server-side session in docker You also need docker for creting
redis server in docker 

3> Then you need to start redis server in docker


Run Redis using Docker so you don’t need to install it on your system manually.
download from this  website doecker  https://www.docker.com/products/docker-desktop
1st command > docker pull redis
2nd comm> docker run -d --name my-redis -p 6379:6379 redis
3rd comm> redis-cli -h localhost -p 6379
4th > Done now you can run using this command  docker start my-redis
5th optional> Stop the container docker stop my-redis
6th optional > for list running containers docker ps


Set Migration 
1 com>  $env:FLASK_APP = "run.py" 
2nd optional> echo $env:FLASK_APP For check
3rd com> flask db init  
4th comm> flask db migrate -m "Initial" 
5th comm> flask db migrate -m "add new fields"  if You add anything in database 
6th command > flask db upgrade for commit 
