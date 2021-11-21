module.exports = {
    "type": "postgres",
    "host": process.env.DATABASE_HOST,
    "port": 5432,//parse env
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "synchronize": false,
    "migrationsRun": false,
    "logging": false,
    "entities": [process.env.TYPEORM_ENTITIES],
    "migrations": [process.env.TYPEORM_MIGRATIONS],
    "subscribers": ["dist/src/subscriber/**/*.js"],
    "cli": {
      "entitiesDir": "dist/src/entity",
      "migrationsDir": "dist/src/migration",
      "subscribersDir": "dist/src/subscriber"
    }
};