import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import expressLayout from 'express-ejs-layouts';
import route from './appRoute/router/main.js';
import {connectDB} from './config/database-connect.js';
connectDB();

const app = express();
const PORT = 5000 || process.env.PORT;

// This will contain all the CSS, IMAGES in the public folder
app.use(express.static('public'));

// Templating engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');



app.get('', route);
app.get('/about', route);
app.get('/contact', route);
app.get('/post', route);

app.listen(PORT, () => {
  console.log(`Project is listening on port ${PORT}`)
});
