import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {
    const query = `SELECT * FROM heroes`;
    MySQL.executeQuery(query, (error: any, heroes: Object[]) => {
        if (error) {
            return res.status(400).json({
                ok: false,
                message: error
            });
        }

        res.json({
            ok: true,
            heroes
        })
    });
});

router.get('/heroes/:id', (req: Request, res: Response) => {
    let id = MySQL.instance.connection.escape(req.params.id);

    const query = `SELECT * FROM heroes WHERE id = ${id}`;

    MySQL.executeQuery(query, (error: any, heroes: Object[]) => {
        if (error) {
            return res.status(400).json({
                ok: false,
                message: error
            });
        }

        res.json({
            ok: true,
            heroes
        })
    });
});

export default router
