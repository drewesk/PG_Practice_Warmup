
module.exports = {

  development: {
    client: 'pg',
    connection: "postgresql://localhost/warmup"
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }


};
