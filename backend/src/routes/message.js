import { Router } from 'express';

import { messageController } from '../controllers';

const router = Router();

router.get('/', messageController.getAll);
router.get('/:messageId', messageController.getOne);
router.post('/', messageController.create);
router.delete('/:messageId', messageController.remove);

export default router;

