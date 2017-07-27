const knex = require('../connection');

module.exports = {

  getAllArticles: () => {
    return knex("article");
  },
  getOneArticle: (id) => {
    return knex("article").where('id', id).first();
  },
  createArticle: (article) => {
    return knex('article').insert(article);
  },
  updateArticle: (article_id, article) => {
    return knex('article').where('id', article_id).update(article, '*');
  },
  deleteArticle: (article_id) => {
    return knex('article').where('id', article_id).del();
  }
}
