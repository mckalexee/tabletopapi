import { Router } from 'express';

const router = Router();

router.route('/')
  .get((req, res) => {
    res.send('API Get');
  })
  .post((req, res) => {
    res.send('API Post');
  });

export { router as APIRoute };
