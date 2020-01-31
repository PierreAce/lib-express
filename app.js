import createError from'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';
import mysql from 'mysql';

import { indexRouter } from './routes/index.js';
import { usersRouter } from './routes/users.js';
import { dashboardRouter } from './routes/dashboard.js';
import { categoryRouter } from './routes/category.js';
import { articleRouter } from './routes/article.js';


const app = express();
//note available with
const __dirname = path.resolve(path.dirname(''));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//parse application/json
app.use(bodyParser.json());

//tinymce.init({selector: 'textarea#default',})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dashboard', dashboardRouter);
app.use('/dashboard/category', categoryRouter);
app.use('/dashboard/article', articleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export const mySqlConnection = mysql.createConnection({
  port: '3306',
  host: 'localhost',
  user: 'root',
  password: '',
  multipleStatements: true,
  database: 'lib_express'
})

mySqlConnection.connect(err => {
  if(err) throw err;
  else{
    app.listen(3000, () => {
      console.log('Server listening...');
    }); 
  }
})
