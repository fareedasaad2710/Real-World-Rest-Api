import { PostgresDataSourceOptions } from "typeorm/driver/postgres/PostgresDataSourceOptions.js";

const config: PostgresDataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'devuser',
    password:'1234',
    database: 'blog',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    // update tables abutomatically every time the app runs
    synchronize: true, //do not use it i production because we might lose data

};

export default config;
