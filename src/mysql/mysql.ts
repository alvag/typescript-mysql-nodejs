import mysql from 'mysql';

export default class MySQL {

    private static _instance: MySQL;

    connection: mysql.Connection;
    isConnected: boolean = false;

    constructor() {
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });

        this.connectDB();
    }

    public static get instance() {
        return this._instance || (this._instance = new this);
    }

    static executeQuery(query: string, callback: Function) {
        this.instance.connection.query(query, (error, results: Object[], fields) => {
            if (error) return callback(error);

            if (results.length === 0) return callback('El registro solicitado no existe');

            callback(null, results)
        });
    };

    private connectDB() {
        this.connection.connect((error: mysql.MysqlError) => {
            if (error) {
                return console.log(`MysqlError: ${error.sqlMessage || error}`);
            };

            this.isConnected = true;
            console.log('Conectado a la base de datos MySQL');
        });
    }
}
