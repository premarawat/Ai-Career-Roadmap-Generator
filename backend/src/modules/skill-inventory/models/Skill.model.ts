import { Schema, model, Document } from 'mongoose';

export interface ISkill extends Document {
  userId: Schema.Types.ObjectId;
  name: string;
  level: string;
  category?: string;
  evidenceUrl?: string;
  status: string;
  createdBy: string | null;
  updatedBy: string | null;
  version: number;
}

const SkillSchema = new Schema<ISkill>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    level: { type: String, required: true },
    category: { type: String },
    evidenceUrl: { type: String },
    status: { type: String, default: 'active' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
  },
  { timestamps: true }
);

export const SkillModel = model<ISkill>('Skill', SkillSchema);
