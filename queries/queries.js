const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: '12fb13a3',
  port: 5432,
})

const getTest = (request, response) => {  
    pool.query("SELECT * FROM test", (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(results.rows)
    })
  }

module.exports = {
  getTest
}