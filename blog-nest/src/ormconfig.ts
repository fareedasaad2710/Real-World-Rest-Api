import { PostgresDataSourceOptions } from "typeorm/driver/postgres/PostgresDataSourceOptions.js";

const config: PostgresDataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'devuser',
    password:'1234',
    database: 'blog',

};

export default config;
