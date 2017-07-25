const knex = require('../connection');

module.exports = {
  getAll: () => {
    return knex("user")
    .distinct('id', 'name', 'email', 'is_active');
  },

  getArticles: () => {
    return knex("article");
  }
}
