# orhp-crud-app
Angular / Java spring app connecting to CosmosDB showcasing CRUD functionality

Requires node 16+ / java 17 / maven

To run locally: 
cd to orhp-frontend
** If angular CLI isn't installed, do an 'npm install -g @angular/cli'

run 'npm install' then 'ng serve' this will host the frontend application to localhost:4200


in a seperate shell instance:

cd to orhp-java
run 'mvn compile' then 'mvnw spring-boot:run -X' this will host the backend application on localhost:8080. 

Frontend documentation (reference ./orhp-crud-app-frontend.drawio) use http://draw.io and upload this file to have a friendlier view)
![orhp-crud-app-frontend drawio](https://github.com/noahrb/orhp-crud-app/assets/21248259/b046cb08-78ff-4520-9179-6cad4dfb188e)

Backend documentation (reference ./orhp-crud-app-backend.drawio) use http://draw.io and upload this file to have a friendlier view)
![Untitled Diagram drawio](https://github.com/noahrb/orhp-crud-app/assets/21248259/b38ef6db-7ec4-4cbe-91ff-27de8fa8c9fa)
