import { Schema, model, Document } from 'mongoose';

export interface ICareerGoal extends Document {
  userId: Schema.Types.ObjectId;
  title: string;
  description: string;
  targetRole: string;
  timeline: string;
  status: string;
  createdBy: string | null;
  updatedBy: string | null;
  version: number;
}

const CareerGoalSchema = new Schema<ICareerGoal>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    targetRole: { type: String, required: true },
    timeline: { type: String, required: true },
    status: { type: String, default: 'active' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
  },
  { timestamps: true }
);

export const CareerGoalModel = model<ICareerGoal>('CareerGoal', CareerGoalSchema);
