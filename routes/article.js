import express from 'express';
import { mySqlConnection } from '../app.js';

export const articleRouter = express.Router();

/* GET article listing. */
/*articleRouter.get('/', (req, res) => {
    res.render('article', { title: 'Articles' });
  });*/

  //Read of the Article Table
  articleRouter.get('/', (req, res) => {
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


    //Function UPDATE Article
    function articleDelete(){
      deleteA.delete('/', (req, res) => {
          mySqlConnection.query(`UPDATE article SET id='${id}' WHERE id='${id}';`,
              (err, rows, fields) => {
                  if(err) throw err;
                  if(rows.length === 0){
                      res.render('404');
                  }else{
                      res.render('article', {
                      title: 'Articles',
                      listArticles: rows
                      });
                  }
              })   
      });    
    }

    //Function DELETE Article
    function articleDelete(){
      deleteA.delete('/', (req, res) => {
          mySqlConnection.query(`DELETE FROM article WHERE id= '${id}';`,
              (err, rows, fields) => {
                  if(err) throw err;
                  if(rows.length === 0){
                      res.render('404');
                  }else{
                      res.redirecte('./dashboard/article');
                  }
              })   
      });    
    }

    /*mySqlConnection.post('/', (req, res, next) => {
      console.group("processing request: ", req.body);
      const{ title, content} = req.body;
      if(!title || !content){
        console.log("invalid request: ", title, content);
        return
      }
    })*/
  });