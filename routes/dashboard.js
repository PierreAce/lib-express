import express from 'express';
import { mySqlConnection } from '../app.js';

export const dashboardRouter = express.Router();

/* GET dashboard listing. */
dashboardRouter.get('/', (req, res) => {
    res.render('dashboard', { title: 'Dashboard' });
  });

  dashboardRouter.post('/', (req, res, next) => {
      console.log('processing request: ', req.body);
      const{ title, content} = req.body;
      if(!title || !content){
          console.log('invalid request: ', title, content);
          return
      }
      mySqlConnection.query(
          `INSERT INTO article (\`title\`, \`content\`) VALUES ('${title}', '${content}');`,
          (err, rows, fields) => {
              if(err) throw err;
              res.redirect('/dashboard');
          }
      )
  })