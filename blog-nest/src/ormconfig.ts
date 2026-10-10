import { PostgresDataSourceOptions } from "typeorm/driver/postgres/PostgresDataSourceOptions.js";
import { DataSource } from "typeorm";
const config: PostgresDataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'devuser',
    password:'1234',
    database: 'blog',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    // update tables abutomatically every time the app runs
    // has very bad risks,very bad practice
    // synchronize: true, //do not use it i production because we might lose data
    migrationsTableName: 'migrations',
    migrations: [__dirname + '/migrations/**/*.ts'],


};
const AppDataSource = new DataSource(config);
export  {AppDataSource};

export default config;
