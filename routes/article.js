var express = require('express');
var router = express.Router();
const queries = require('../db/queries');

router.get('/article', (req, res, next) => {
  queries.getAllArticles().then((articles) => {
    res.json(articles);
  });
});

router.get('/article/:id/', (req, res, next) => {
  queries.getOneArticle(req.params.id)
    .then((article) => {
      res.json(article);
    });
});

router.post('/article/', (req, res, next) => {
  queries.createArticle(req.body).then((article) => {
    res.json(article[0]);
  });
});

router.put('/article/:id/', (req, res, next) => {
  if(req.body) {
    queries.updateArticle(req.params.id, req.body)
      .then((article) => {
        res.json(article[0]);
      });
  } else {
    next(new Error('Invalid'));
  }
});

router.delete('/article/:id/', (req, res, next) => {
  queries.deleteArticle(req.params.id).then(() => {
    res.json({
      deleted: true
    })
  })
});

module.exports = router;
