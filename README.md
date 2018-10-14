# Project to check React-Redux-Node.js

### Here are presented:

 - Redux with actions,reducers,middleware
 - React with routing
 - Node.js server
### What's happening:
 - There are three pages: ***Main page***, ***Page with numbers*** and ***Page with products*** 
 - ***Pages with numbers and products*** dispatch events to make AJAX-requests to Node.js server and show got data
 - Events are received by middleware, which actually makes requests
 - Node.js server answers with plain objects(always the same objects)
 - After getting answer from server, data is stored in Redux store
 - At ***Main page*** exists button to "sign in/out" which changes store state
 - After "signing in" you can get an access to ***Page with numbers***
 
To start:
1. npm install
2. node src/server/server.js
3. **npm run webpack** (to start dev server) or **npm run wpb** to build and then open in browser