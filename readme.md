# Structure

1. Control starts with the <b>app.js</b> when we hit any endpoint.
2. It will then be passed to routes.
3. routes will only check the path and pass the control to models.
4. models process the data, all the business logic is in models.
5. The control from models will then pass into db where all the database operations are done.
6. From db it will do to dbEngines that is common file for opening the connection with mysql database.

# To run the application

1. To run the application, install nodeJs and start the server "node app.js"
2. You should also install Mysql and add the configuration data in config/config.json file.
3. Open Postman and hit localhost:8000/add (GET request)
4. This will add all the data in database
5. To search, open localhost:8000/search (POST request) with 1 parameter "token".

