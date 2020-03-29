import express from 'express';
import { mySqlConnection } from '../app.js';

export const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Lib Express' });
  mySqlConnection.query('SELECT * from article;',
      (err, rows, fields) => {
        console.log('ROWS : ', rows);
        if(err) throw err;
        if(rows.length === 0){
          res.render('404');
        }else{
          res.render('article', {
            title: 'Articles',
            listArticles: rows
          });
        }
      }
    )
});