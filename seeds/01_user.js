const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE "user" RESTART IDENTITY CASCADE;')
  .then(() => {

        const users = [
          {
            name: 'testingBot1',
            email: 'rob@zombie.com',
            password: bcrypt.hashSync('testpass123'),
            created_at: new Date()
          },
          {
            name: 'testingBot2',
            email: 'wertyui@ertyu.com',
            password: bcrypt.hashSync('testpass123'),
            created_at: new Date()
          },
          {
            name: 'testingBot3',
            email: 'test@test.com',
            password: bcrypt.hashSync('testpass123'),
            created_at: new Date()
          },
          {
            name: 'hey',
            email: 'hey@hey.com',
            password: bcrypt.hashSync('testpass123'),
            created_at: new Date()
          },
          {
            name: 'testingBot5',
            email: 'tesdfst@sdftest.com',
            password: bcrypt.hashSync('testpass123'),
            created_at: new Date()
          }
        ];

        return knex('user').insert(users)

      });
};
