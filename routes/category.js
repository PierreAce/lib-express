import express from 'express';

export const categoryRouter = express.Router();

/* GET category listing. */
categoryRouter.get('/', (req, res) => {
    res.render('category', { title: 'Catégories' });
  });