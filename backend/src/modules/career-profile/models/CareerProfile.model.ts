import { Schema, model, Document } from 'mongoose';

export interface ICareerProfile extends Document {
  userId: Schema.Types.ObjectId;
  education: Array<{ institution: string; degree: string; field: string; startYear: number; endYear?: number }>;
  skills: Array<{ name: string; level: string }>;
  certifications: Array<{ name: string; issuer: string; earnedAt: Date; evidenceUrl?: string }>;
  interests: string[];
  experience: Array<{ company: string; role: string; duration: string; description?: string }>;
  status: string;
  createdBy: string | null;
  updatedBy: string | null;
  version: number;
}

const CareerProfileSchema = new Schema<ICareerProfile>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    education: [
      {
        institution: { type: String, required: true },
        degree: { type: String, required: true },
        field: { type: String, required: true },
        startYear: { type: Number, required: true },
        endYear: { type: Number }
      }
    ],
    skills: [{ name: String, level: String }],
    certifications: [
      {
        name: String,
        issuer: String,
        earnedAt: Date,
        evidenceUrl: String
      }
    ],
    interests: [String],
    experience: [
      {
        company: String,
        role: String,
        duration: String,
        description: String
      }
    ],
    status: { type: String, default: 'active' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
  },
  { timestamps: true }
);

export const CareerProfileModel = model<ICareerProfile>('CareerProfile', CareerProfileSchema);
