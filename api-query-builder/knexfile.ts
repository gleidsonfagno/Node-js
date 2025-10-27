export default {
    client: "sqlite3",
    connection: {
        filename: "./src/database/database.db",
    },
    pool : {
        afterCreate: (connection: any, done: any ) => {
            connection.run("PRAGMA foreign_keys = ON"),
            done()
        }
    },
    useNullAsDefault: true,
    migrations: {
        directory: "./src/database/migrations",
        extension: "ts"
    },
    seeds: {
        directory: "./src/database/seeds",
        extension: "ts"
    }
}
