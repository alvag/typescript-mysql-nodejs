"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class MySQL {
    constructor() {
        this.isConnected = false;
        this.connection = mysql_1.default.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        this.connectDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this);
    }
    connectDB() {
        this.connection.connect((error) => {
            if (error) {
                return console.log(`MysqlError: ${error.sqlMessage || error}`);
            }
            ;
            this.isConnected = true;
            console.log('Conectado a la base de datos MySQL');
        });
    }
}
exports.default = MySQL;
