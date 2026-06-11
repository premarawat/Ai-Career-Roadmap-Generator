import { Schema, model, Document } from 'mongoose';

export interface IRoadmapMilestone {
  title: string;
  description: string;
  dueWeek: number;
  completed: boolean;
}

export interface IRoadmap extends Document {
  userId: Schema.Types.ObjectId;
  careerGoal: string;
  learningPath: string[];
  weeklyPlan: Array<{ week: number; tasks: string[] }>;
  milestones: IRoadmapMilestone[];
  projectRecommendations: string[];
  aiMetadata: {
    promptVersion: string;
    model: string;
    confidence?: number;
  };
  status: string;
  createdBy: string | null;
  updatedBy: string | null;
  version: number;
}

const RoadmapSchema = new Schema<IRoadmap>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    careerGoal: { type: String, required: true },
    learningPath: [String],
    weeklyPlan: [
      {
        week: Number,
        tasks: [String]
      }
    ],
    milestones: [
      {
        title: String,
        description: String,
        dueWeek: Number,
        completed: Boolean
      }
    ],
    projectRecommendations: [String],
    aiMetadata: {
      promptVersion: String,
      model: String,
      confidence: Number
    },
    status: { type: String, default: 'active' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
  },
  { timestamps: true }
);

export const RoadmapModel = model<IRoadmap>('Roadmap', RoadmapSchema);
