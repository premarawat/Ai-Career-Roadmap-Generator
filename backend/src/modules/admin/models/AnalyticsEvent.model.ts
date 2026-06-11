import { Schema, model, Document } from 'mongoose';

export interface IAnalyticsEvent extends Document {
  userId: Schema.Types.ObjectId | null;
  eventType: string;
  payload: Record<string, unknown>;
  status: string;
  createdBy: string | null;
  updatedBy: string | null;
  version: number;
}

const AnalyticsEventSchema = new Schema<IAnalyticsEvent>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    eventType: { type: String, required: true },
    payload: { type: Schema.Types.Mixed },
    status: { type: String, default: 'active' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
  },
  { timestamps: true }
);

export const AnalyticsEventModel = model<IAnalyticsEvent>('AnalyticsEvent', AnalyticsEventSchema);
