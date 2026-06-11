"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gapAnalysisRouter = void 0;
const express_1 = require("express");
const gap_analysis_controller_1 = require("../controllers/gap-analysis.controller");
const auth_middleware_1 = require("../../../middleware/auth.middleware");
const validate_middleware_1 = require("../../../middleware/validate.middleware");
const gap_analysis_schemas_1 = require("../schemas/gap-analysis.schemas");
exports.gapAnalysisRouter = (0, express_1.Router)();
exports.gapAnalysisRouter.post('/', auth_middleware_1.authenticate, (0, validate_middleware_1.validateRequest)(gap_analysis_schemas_1.gapAnalysisCreateSchema), gap_analysis_controller_1.createGapAnalysisController);
exports.gapAnalysisRouter.get('/:id', auth_middleware_1.authenticate, (0, validate_middleware_1.validateRequest)(gap_analysis_schemas_1.gapAnalysisIdSchema), gap_analysis_controller_1.getGapAnalysisController);
//# sourceMappingURL=gap-analysis.routes.js.map