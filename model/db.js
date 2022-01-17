const { Pool } = require('pg');
const poll = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432
})


/*
ex:
const poll = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'arch_challenger',
  password: 'asa',
  port: 5432
})
*/
module.exports = poll;
