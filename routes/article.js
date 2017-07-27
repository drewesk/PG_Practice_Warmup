var express = require('express');
var router = express.Router();
const queries = require('../db/queries');


/**
 * @api {get} /article
 * @apiName GET All
 * @apiGroup article
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "id": 1,
 *         "...": "..."
 *       },
 *       {
 *         "id": 2,
 *         "...": "..."
 *       }
 *     ]
 */

router.get('/article', (req, res, next) => {
  queries.getAllArticles().then((articles) => {
    res.json(articles);
  });
});

/**
 * @api {get} /resourceName/:id
 * @apiName GET One
 * @apiGroup article
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "...": "..."
 *     }
 */

router.get('/article/:id/', (req, res, next) => {
  queries.getOneArticle(req.params.id)
    .then((article) => {
      res.json(article);
    });
});

/**
 * @api {post} /article/:id
 * @apiName POST
 * @apiGroup article
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "...": "..."
 *     }
 */


router.post('/article/', (req, res, next) => {
  queries.createArticle(req.body).then((article) => {
    res.json(article[0]);
  });
});

/**
* @api {put} /resourceName/:id
* @apiName PUT
* @apiGroup article
*
* @apiSuccessExample {json} Success-Response:
*     HTTP/1.1 200 OK
*     {
*       {
*         "id": 1,
*         "...": "..."
*       }
*     }
*/

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

/**
 * @api {delete} /article/:id
 * @apiName DELETE
 * @apiGroup article
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "deleted": true
 *     }
 */

router.delete('/article/:id/', (req, res, next) => {
  queries.deleteArticle(req.params.id).then(() => {
    res.json({
      deleted: true
    })
  })
});

module.exports = router;
