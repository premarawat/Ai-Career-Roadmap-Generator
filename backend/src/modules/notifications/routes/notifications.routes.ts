import { Router } from 'express';
import { getNotificationsController, patchNotificationReadController } from '../controllers/notification.controller';
import { authenticate } from '../../../middleware/auth.middleware';
import { validateRequest } from '../../../middleware/validate.middleware';
import { updateNotificationReadSchema } from '../schemas/notification.schemas';

export const notificationRouter = Router();

notificationRouter.get('/', authenticate, getNotificationsController);
notificationRouter.patch('/:id/read', authenticate, validateRequest(updateNotificationReadSchema), patchNotificationReadController);
