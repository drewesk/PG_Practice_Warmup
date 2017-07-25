const knex = require('../connection');

module.exports = {
  getOneByID: (id) => {
    return knex('user')
            .where('id', id)
            .first()
            .distinct('id', 'name', 'email', 'is_active');
  },
  getOneByEmail: (email) => {
    return knex('user')
                .where('email', email)
                .first()
                .distinct('id', 'name', 'email', 'password', 'is_active');
  },
  create: (user) => {
    return knex('user')
                .insert(user, 'id')
                .then((ids) => {
                  return ids[0];
                });
  }
}
