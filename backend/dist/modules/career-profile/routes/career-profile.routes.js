"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.careerProfileRouter = void 0;
const express_1 = require("express");
const career_profile_controller_1 = require("../controllers/career-profile.controller");
const auth_middleware_1 = require("../../../middleware/auth.middleware");
const validate_middleware_1 = require("../../../middleware/validate.middleware");
const career_profile_schemas_1 = require("../schemas/career-profile.schemas");
exports.careerProfileRouter = (0, express_1.Router)();
exports.careerProfileRouter.post('/', auth_middleware_1.authenticate, (0, validate_middleware_1.validateRequest)(career_profile_schemas_1.careerProfileSchema), career_profile_controller_1.createCareerProfile);
exports.careerProfileRouter.get('/', auth_middleware_1.authenticate, career_profile_controller_1.fetchCareerProfile);
exports.careerProfileRouter.patch('/', auth_middleware_1.authenticate, (0, validate_middleware_1.validateRequest)(career_profile_schemas_1.careerProfileSchema), career_profile_controller_1.patchCareerProfile);
//# sourceMappingURL=career-profile.routes.js.map