# After Tinder
After Tinder aims to provide tools for healthy love relationships.

## Setup

### Dependencies

- Run `npm install` in the project directory. This will install server-related dependencies such as `express`.  
- `cd client` and run `npm install`. This will install client dependencies (React).

### Database Prep

- 1. Access the MySQL interface in your terminal by running `mysql -u root -p`. (Or your password, if not 'root')

- 2. Create a new database called 'AfterTinder' by running the command `create database AfterTinder;`. If you already have a table called AfterTinder, give the database the name you prefer and follow these steps: 
    · Inside "model" folder, in the database.js file (around line 14), change the name "AfterTinder" for the name of your database.
          const con = mysql.createConnection({
            host: DB_HOST || "127.0.0.1",
            user: DB_USER || "root",
            password: DB_PASS,
            database: DB_NAME || "AfterTinder" (HERE THE NAME OF YOUR DATABASE),
            multipleStatements: true,
        });

- 3. - Create an `.env` file in the project folder (the root) of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=AfterTinder (or NAMEOFYOURDATABASE)
  DB_PASS=YOURPASSWORD
  SUPER_SECRET=yourSuperSecretKey
```

- 4. Run `npm run migrate` in a new terminal window in the project folder of this repository. This will create 3 tables: 'users', 'relationships' and 'users_relationships' in the database.

### Gemini API set up

- 1. Make sure you have a VPN connected to a country where Gemini API is available. You can check a list of available regions and languages in the Gemini API documentation.

- 2. Follow the documentation instructions (https://ai.google.dev/gemini-api/docs/get-started/node) to get an API.

- 3. Store your API in the .env file as shown: 
  BARD_API_KEY = YourGeminiAPIKey


## Guidelines
- NOTE: in the backend, the login logic is held in the users file and the logic to get/post AI data is held in index.js.
- NOTE: your database tables will be empty when you first open the app. After configuration, you should be able to populate them using the front end. If you need to manually test it in Postman, there's a sample code and instructions in client/src/assets/testcode. This file is not connected to the app: it's used to try and store code samples that might be useful for the developing process.
- NOTE: the code to pair partners is used in the backend with uuid. We need to npm install, should we include this on readmefile?


- Resources you may need: 
  - [MDN docs](https://developer.mozilla.org/en-US/)
  - [Express docs](https://expressjs.com/en/api.html)
  - [MySQL docs](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
  - [React docs](https://reactjs.org/docs/hello-world.html)
  - [Vite scaffolding docs](https://vitejs.dev/guide/)
  - [React-router docs](https://reactrouter.com/en/main)
  - [React-router docs](https://reactrouter.com/en/main/hooks/use-navigate)
  - [React-router docs](https://reactrouter.com/en/main/hooks/use-outlet-context)
  - [Bootstrap docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
  - [Axios docs](https://axios-http.com/es/docs/intro)
  - [Love quotes API](https://rapidapi.com/colebidex-mO-Ew1CYzUS/api/love-quote)
  - [Gemini API docs](https://ai.google.dev/gemini-api/docs/get-started/node)
  - [Progress bar docs](https://www.npmjs.com/package/@ramonak/react-progress-bar)
  - [React chartsjs-2](https://react-chartjs-2.js.org/)
  - [MDN docs window docs](https://developer.mozilla.org/en-US/docs/Web/API/Window)
  - [Font Awesome docs](https://docs.fontawesome.com/)
  - [uuid docs](https://www.uuidgenerator.net/dev-corner/javascript)
  -[Jason Wew Token docs](https://www.npmjs.com/package/jsonwebtoken)
  -[bycrypt docs](https://www.npmjs.com/package/bcrypt)