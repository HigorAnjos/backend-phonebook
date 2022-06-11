const Importer = require("mysql-import");
require("dotenv").config();

const restoreDb = async () => {
  const { DB_USER, DB_PASS, DB_HOST } = process.env;

  const importer = new Importer({
      user: DB_USER,
      password: DB_PASS,
      host: DB_HOST,
    });

    await importer.import('./db.sql');

    await importer.disconnect();
};

module.exports = restoreDb;

if (!module.parent) {
    restoreDb();
}
