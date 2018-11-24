"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/heroes', (req, res) => {
    const query = `SELECT * FROM heroes`;
    mysql_1.default.executeQuery(query, (error, heroes) => {
        if (error) {
            return res.status(400).json({
                ok: false,
                message: error
            });
        }
        res.json({
            ok: true,
            heroes
        });
    });
});
router.get('/heroes/:id', (req, res) => {
    let id = mysql_1.default.instance.connection.escape(req.params.id);
    const query = `SELECT * FROM heroes WHERE id = ${id}`;
    mysql_1.default.executeQuery(query, (error, heroes) => {
        if (error) {
            return res.status(400).json({
                ok: false,
                message: error
            });
        }
        res.json({
            ok: true,
            heroes
        });
    });
});
exports.default = router;
