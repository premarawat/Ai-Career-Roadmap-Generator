import { Schema, model, Document } from 'mongoose';

export interface IGapAnalysis extends Document {
  userId: Schema.Types.ObjectId;
  currentSkills: string[];
  targetSkills: string[];
  missingSkills: string[];
  readinessScore: number;
  priorityAreas: string[];
  status: string;
  createdBy: string | null;
  updatedBy: string | null;
  version: number;
}

const GapAnalysisSchema = new Schema<IGapAnalysis>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    currentSkills: [String],
    targetSkills: [String],
    missingSkills: [String],
    readinessScore: { type: Number, default: 0 },
    priorityAreas: [String],
    status: { type: String, default: 'active' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
  },
  { timestamps: true }
);

export const GapAnalysisModel = model<IGapAnalysis>('GapAnalysis', GapAnalysisSchema);
