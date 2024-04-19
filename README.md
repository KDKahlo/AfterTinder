# After Tinder
After Tinder aims to provide tools for healthy love relationships.
## Current Bugs/ Things that need to be fixed/added

- ❌ model/Init_db.sql: needs to be updated with the correct tables names.
- ❌ .env: needs to be updated with correct DB name.
- ❌ model/database.js: needs to be updated with correct DB name.
- NOTE: we can't do 'run npm migrate' until all this is correctly done.

## Setup

### Dependencies

- Run `npm install` in the project directory. This will install server-related dependencies such as `express`.  
- `cd client` and run `npm install`. This will install client dependencies (React).

### Database Prep

- 1. Access the MySQL interface in your terminal by running `mysql -u root -p`. (Or your password, if not 'root')

- 2. Create a new database called 'XXXXXXXXX' by running the command `create database XXXXXXXXX`. If you already have a table called XXXXXXXXXX, give the database the name you prefer and follow these steps: 
    · Inside "model" folder, in the database.js file (around line 14), change the name "XXXXXXXXX" for the name of your database.
          const con = mysql.createConnection({
            host: DB_HOST || "127.0.0.1",
            user: DB_USER || "root",
            password: DB_PASS,
            database: DB_NAME || "XXXXXXXXX" (HERE THE NAME OF YOUR DATABASE),
            multipleStatements: true,
        });
    · Set the name of your database in model/database.js (line 14).


- 3. - Create an `.env` file in the project folder (the root) of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=NAMEOFYOURDATABASE
  DB_PASS=YOURPASSWORD
  SUPER_SECRET=yourSuperSecretKey
```

- 4. 

- 5. Run `npm run migrate` in a new terminal window in the project folder of this repository. This will create a table called called 'users' and a table called 'entries' in the database.

## Guidelines
- NOTE: in the backend, the login logic is held in the XXXXXXXX file and the logic to post entries is held in XXXXXXX.js.
- NOTE: your database tables will be empty when you first open the app. After configuration, you should be able to populate them XXXXXXXXXX... If you need to manually test it in Postman, there's a sample code and instructions in client/src/components/testcode. This file is not connected to the app: it's used to try and store code samples that might be useful for the developing process.


- Resources you may need: XXXXXXXXXXX
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


  - [React calendar](https://www.npmjs.com/package/react-calendar)
  - [React chartsjs-2](https://react-chartjs-2.js.org/)
 - [MDN docs window.alert](https://developer.mozilla.org/es/docs/Web/API/Window/alert)
   