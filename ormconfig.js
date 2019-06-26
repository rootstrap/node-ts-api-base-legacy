require('dotenv');

module.exports = {
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT || 5432,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "synchronize": false,
  "logging": true,
  "entities": [
    "dist/models/**/*.js"
  ],
  "migrations": [
    "dist/db/migrations/**/*.js"
  ],
  "subscribers": [
    "dist/db/subscribers/**/*.js"
  ],
  "cli": {
    "entitiesDir": "src/",
    "migrationsDir": "src/db/migrations",
    "subscribersDir": "src/db/subscribers"
  }
}
