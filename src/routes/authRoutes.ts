import { Router } from 'express';
const router = Router();

router.get('/some-route', (req, res) => {
  res.send('Hello from some-route');
});

export default router;
