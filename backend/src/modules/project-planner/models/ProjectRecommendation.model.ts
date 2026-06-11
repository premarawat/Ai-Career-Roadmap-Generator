import { Schema, model, Document } from 'mongoose';

export interface IProjectRecommendation extends Document {
  userId: Schema.Types.ObjectId;
  careerGoal: string;
  skillLevel: string;
  roadmapStage: string;
  title: string;
  description: string;
  suggestions: string[];
  status: string;
  createdBy: string | null;
  updatedBy: string | null;
  version: number;
}

const ProjectRecommendationSchema = new Schema<IProjectRecommendation>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    careerGoal: { type: String, required: true },
    skillLevel: { type: String, required: true },
    roadmapStage: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    suggestions: [String],
    status: { type: String, default: 'active' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
  },
  { timestamps: true }
);

export const ProjectRecommendationModel = model<IProjectRecommendation>('ProjectRecommendation', ProjectRecommendationSchema);
