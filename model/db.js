const { Pool } = require('pg');
const poll = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'arch_challenger',
  password: 'asa',
  port: 5432
})

module.exports = poll;
