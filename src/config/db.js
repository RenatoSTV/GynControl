const { Pool } = require("pg")

module.exports = new Pool({
    user: 'postgres',
    password: "erika297",
    host: "localhost",
    port: 5432,
    database: "gymmanager"
})