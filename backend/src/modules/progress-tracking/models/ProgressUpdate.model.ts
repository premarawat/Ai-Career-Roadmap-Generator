import { Schema, model, Document } from 'mongoose';

export interface IProgressUpdate extends Document {
  userId: Schema.Types.ObjectId;
  completedSkills: string[];
  completedMilestones: string[];
  completedProjects: string[];
  completedCertifications: string[];
  status: string;
  createdBy: string | null;
  updatedBy: string | null;
  version: number;
}

const ProgressUpdateSchema = new Schema<IProgressUpdate>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    completedSkills: [String],
    completedMilestones: [String],
    completedProjects: [String],
    completedCertifications: [String],
    status: { type: String, default: 'active' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
  },
  { timestamps: true }
);

export const ProgressUpdateModel = model<IProgressUpdate>('ProgressUpdate', ProgressUpdateSchema);
