import { Router, Request, Response } from 'express';

import { User } from '../models/User';
import { AuthRouter, requireAuth } from './auth.router';

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/', requireAuth, async (req: Request, res: Response) => {
});

router.get('/:id', requireAuth, async (req: Request, res: Response) => {
    let { id } = req.params;
    const item = await User.findByPk(id);

    if (item){
        res.send(item).status(200);
        return
    }
    else {
        res.status(404).send({'Error': 'User could not be found'});
        return
    }
});

export const UserRouter: Router = router;