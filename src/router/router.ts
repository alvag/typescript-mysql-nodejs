import { Router, Request, Response } from 'express';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {
    res.json({
        error: false,
        message: 'Servicio corriendo correctamente'
    })
});

export default router
