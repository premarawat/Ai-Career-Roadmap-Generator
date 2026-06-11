"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const env_1 = require("./config/env");
const request_id_helper_1 = require("./common/helpers/request-id.helper");
const error_middleware_1 = require("./middleware/error.middleware");
const auth_routes_1 = require("./auth/routes/auth.routes");
const career_profile_routes_1 = require("./modules/career-profile/routes/career-profile.routes");
const goal_routes_1 = require("./modules/goal-selection/routes/goal.routes");
const skill_routes_1 = require("./modules/skill-inventory/routes/skill.routes");
const gap_analysis_routes_1 = require("./modules/gap-analysis/routes/gap-analysis.routes");
const roadmap_routes_1 = require("./modules/roadmap-builder/routes/roadmap.routes");
const progress_routes_1 = require("./modules/progress-tracking/routes/progress.routes");
const project_routes_1 = require("./modules/project-planner/routes/project.routes");
const mentor_review_routes_1 = require("./modules/mentor-review/routes/mentor-review.routes");
const notifications_routes_1 = require("./modules/notifications/routes/notifications.routes");
const admin_routes_1 = require("./modules/admin/routes/admin.routes");
exports.app = (0, express_1.default)();
exports.app.use((0, helmet_1.default)());
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json({ limit: '10mb' }));
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use(request_id_helper_1.requestIdMiddleware);
exports.app.use((0, morgan_1.default)('combined'));
exports.app.use((0, express_rate_limit_1.default)({
    windowMs: env_1.env.rateLimit.windowMs,
    max: env_1.env.rateLimit.max,
    standardHeaders: true,
    legacyHeaders: false
}));
exports.app.use('/api/v1/auth', auth_routes_1.authRouter);
exports.app.use('/api/v1/career-profile', career_profile_routes_1.careerProfileRouter);
exports.app.use('/api/v1/career-goals', goal_routes_1.goalRouter);
exports.app.use('/api/v1/skills', skill_routes_1.skillRouter);
exports.app.use('/api/v1/gap-analysis', gap_analysis_routes_1.gapAnalysisRouter);
exports.app.use('/api/v1/roadmap', roadmap_routes_1.roadmapRouter);
exports.app.use('/api/v1/progress', progress_routes_1.progressRouter);
exports.app.use('/api/v1/projects', project_routes_1.projectRouter);
exports.app.use('/api/v1/mentor-review', mentor_review_routes_1.mentorReviewRouter);
exports.app.use('/api/v1/notifications', notifications_routes_1.notificationRouter);
exports.app.use('/api/v1/admin', admin_routes_1.adminRouter);
exports.app.use(error_middleware_1.errorMiddleware);
//# sourceMappingURL=app.js.map