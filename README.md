So this is Student's login portal ......

and tech used here are ->
=> Express.js for server 
=> JWT for hassle free server-side authentication
=> sqllite3 for database (without creating a separate DB server)
=> bcrypt js for storing the password in hash form and not plain text 

so here's the working of my project :

Signup — you send a name, email, and password. The password is
   hashed with bcrypt before it ever touches the database 

Login — you send email + password. If they match, the server
   returns a JWT (a signed token) that proves who you are to the client.

Protected route — you send that token in the `Authorization`
   header to access `/api/auth/me`.The middleware checks the token is
   valid before letting the request through.