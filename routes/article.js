var express = require('express');
var router = express.Router();
const queries = require('../db/queries');

router.get('/articles', (req, res, next) => {
  queries.getArticles().then((articles) => {
    res.json(articles);
  });
});

module.exports = router;
