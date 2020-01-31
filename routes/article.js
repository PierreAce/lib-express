import express from 'express';

export const articleRouter = express.Router();

/* GET article listing. */
articleRouter.get('/', (req, res) => {
    res.render('article', { title: 'Articles' });
  });

  articleRouter.get('/', (req, res) => {
      res.statusCode = 400;
      res.end();
    mySqlConnection.query(`SELECT * from article';`,
      (err, rows, fields) => {
        if(err) throw err;
        if(rows.length === 0){
          res.render('404');
        }else{
          console.log("detail bug : ", rows[0]);
        }
      }
    )
  }); 