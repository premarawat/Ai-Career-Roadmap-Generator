import { Router } from 'express';
import { getUsersController, patchUserController, deleteUserController, getAuditEventsController, getAnalyticsController } from '../controllers/admin.controller';
import { authenticate } from '../../../middleware/auth.middleware';
import { authorize } from '../../../middleware/role.middleware';
import { Roles } from '../../../common/constants/roles';

export const adminRouter = Router();

adminRouter.use(authenticate, authorize([Roles.ADMIN]));

adminRouter.get('/users', getUsersController);
adminRouter.patch('/users/:id', patchUserController);
adminRouter.delete('/users/:id', deleteUserController);
adminRouter.get('/audit-events', getAuditEventsController);
adminRouter.get('/analytics', getAnalyticsController);
