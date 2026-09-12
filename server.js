const express = require('express');
const app = express()   // our express application
const port = 3000
require('dotenv').config(); // so it will import variables from .env file like JWT secrets , passwords or API keys without exposing on github


if (!process.env.JWT_SECRET) {
  console.error('Missing JWT_SECRET in your .env file. Copy .env.example to .env and set one.');
  process.exit(1);
}
app.use(express.json()); // middleware to tell express to convert every coming req in JSON

// so this prints details like date,method and path in terminal on every request (our custom middleware)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});


app.get('/', (req, res) => {  // routing the request 
  res.send('TSEC COMPS DEPARTMENT STUDENT SIGNING PORTAL')
})

app.use('/api/auth', authRoutes); // all the routing for authentican purpose are in authRoutes directory

app.use((req, res) => {                     //  if no route found  i.e 404 error
  res.status(404).json({ error: 'Route not found.' });
});

app.use((err, req, res, next) => {
  console.error(err); // with this the error will  display  on terminal
  res.status(500).json({ error: 'Something went wrong on the server.' }); // this json line will be printed on server on error with 500 status code
});


app.listen(port, () => {
  console.log(`So our server is running on port ${port}`) // starting of running our server
})