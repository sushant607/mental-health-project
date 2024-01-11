const express = require('express');
const router = express.Router();
const Article = require('../models/blog');

router.get('/new', (req, res) => {
  res.render('blog/new');
});

router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.render('blog/show', { article: article });
  } catch (error) {
    res.status(404).send('Article not found');
  }
});

router.post('/', async (req, res) => { // Changed the route to '/'
  let article = new Article({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedArticle = await article.save();
    res.redirect(`/${savedArticle.id}`); // Updated the redirect route
  } catch (error) {
    res.render('blog/new', { article: article });
  }
});

module.exports = router;
