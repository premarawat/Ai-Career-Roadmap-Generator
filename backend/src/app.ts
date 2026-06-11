import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { env } from './config/env';
import { requestIdMiddleware } from './common/helpers/request-id.helper';
import { errorMiddleware } from './middleware/error.middleware';
import { authRouter } from './auth/routes/auth.routes';
import { careerProfileRouter } from './modules/career-profile/routes/career-profile.routes';
import { goalRouter } from './modules/goal-selection/routes/goal.routes';
import { skillRouter } from './modules/skill-inventory/routes/skill.routes';
import { gapAnalysisRouter } from './modules/gap-analysis/routes/gap-analysis.routes';
import { roadmapRouter } from './modules/roadmap-builder/routes/roadmap.routes';
import { progressRouter } from './modules/progress-tracking/routes/progress.routes';
import { projectRouter } from './modules/project-planner/routes/project.routes';
import { mentorReviewRouter } from './modules/mentor-review/routes/mentor-review.routes';
import { notificationRouter } from './modules/notifications/routes/notifications.routes';
import { adminRouter } from './modules/admin/routes/admin.routes';

export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(requestIdMiddleware);
app.use(morgan('combined'));

app.use(
  rateLimit({
    windowMs: env.rateLimit.windowMs,
    max: env.rateLimit.max,
    standardHeaders: true,
    legacyHeaders: false
  })
);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/career-profile', careerProfileRouter);
app.use('/api/v1/career-goals', goalRouter);
app.use('/api/v1/skills', skillRouter);
app.use('/api/v1/gap-analysis', gapAnalysisRouter);
app.use('/api/v1/roadmap', roadmapRouter);
app.use('/api/v1/progress', progressRouter);
app.use('/api/v1/projects', projectRouter);
app.use('/api/v1/mentor-review', mentorReviewRouter);
app.use('/api/v1/notifications', notificationRouter);
app.use('/api/v1/admin', adminRouter);

app.use(errorMiddleware);
