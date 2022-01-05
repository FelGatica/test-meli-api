# Api Items
## Structure 
> #### test-meli-api
>
> - **data-access** folder
>   - Adapters to comunicate with external api's
> - **domain** folder 
>   - Domain entities, core of the application
 - **controllers** folder 
>   - Controllers to indicate how expose api (Ports)
 - **use-cases** folder 
>   - Abstraction of use cases with the bussiness logic.
> - **express-callback** folder
>   - Helper to catch all the request via express
> - **app.js** file
> - **.env** file
> - package.json


### File app.js
This file contains the logic in order to start the api. In this file you need to include all the controllers then you want to expose.

### File env.js
This file contains the params with the app works.

### Execution
```terminal
npm run dev
```
### Postman to test
Link to postman collection to test the endpoints
https://www.getpostman.com/collections/7e9d186e72cd0f243e25

### Distribution
```terminal
npm run build
```
> Port can be defined specifictly on the .env file
