import { Router, Request, Response } from 'express';
import { UserRouter } from './users/routes/user.router';
import { AuthRouter, requireAuth } from './users/routes/auth.router';

const router: Router = Router();


router.use('/users', UserRouter);
router.use('/auth', AuthRouter);

router.get('/', async (req: Request, res: Response) => {    
    res.send(`V0`);
});

export const IndexRouter: Router = router;