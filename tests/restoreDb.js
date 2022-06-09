const pgtools = require("pgtools");
const pgp = require('pg-promise')();
const fs = require('fs');
require("dotenv").config();

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;

const config = {
  user: "postgres" || DB_USER,
  host: "localhost" || DB_HOST,
  password: "postgres" || DB_PASS,
  port: 5432 || DB_PORT,
};

const restoreDb = async () => {
  const sql = await fs.promises.readFile('db.sql');
  const sqlString = sql.toString();

  try {
    await pgtools.dropdb(config, DB_NAME, (err) => {
      // if (err) {
      //   console.log(err);
      //   console.log('DB does not exist');
      // } else {
      //   console.log('DB dropped');
      // }
    });
  } catch (err) {
    // console.log("err");
    // console.log(err);
  }

  await pgtools.createdb(config, DB_NAME, (err) => {
    // if (err) {
    //   console.log(err);
    // } else {
    //   console.log('Database created');
    // }
  });

  const db = pgp({...config, database: DB_NAME});

  await db.query(sqlString)
}

module.exports = restoreDb;

if (!module.parent) {
    restoreDb();
}


