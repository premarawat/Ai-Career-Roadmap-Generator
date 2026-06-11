import { Schema, model, Document } from 'mongoose';

export interface IMentorComment extends Document {
  userId: Schema.Types.ObjectId;
  mentorId: Schema.Types.ObjectId;
  roadmapId: Schema.Types.ObjectId;
  comment: string;
  feedback: string;
  status: 'pending' | 'approved' | 'rejected';
  statusReason?: string;
  createdBy: string | null;
  updatedBy: string | null;
  version: number;
}

const MentorCommentSchema = new Schema<IMentorComment>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    mentorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    roadmapId: { type: Schema.Types.ObjectId, ref: 'Roadmap', required: true },
    comment: { type: String, required: true },
    feedback: { type: String, required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    statusReason: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
  },
  { timestamps: true }
);

export const MentorCommentModel = model<IMentorComment>('MentorComment', MentorCommentSchema);
