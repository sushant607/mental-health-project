const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
const blogRouter = require('./routes/blog');

const app = express();
const port = 5000;

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/megha', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(blogRouter);
// Use the login and signup routers
app.use(loginRouter);
app.use(signupRouter);



app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
