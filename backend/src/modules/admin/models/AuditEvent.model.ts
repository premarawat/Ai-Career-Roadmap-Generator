import { Schema, model, Document } from 'mongoose';

export interface IAuditEvent extends Document {
  action: string;
  userId: Schema.Types.ObjectId | null;
  role: string;
  ip: string;
  metadata: Record<string, unknown>;
  status: string;
  createdBy: string | null;
  updatedBy: string | null;
  version: number;
}

const AuditEventSchema = new Schema<IAuditEvent>(
  {
    action: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    role: { type: String, required: true },
    ip: { type: String, required: true },
    metadata: { type: Schema.Types.Mixed },
    status: { type: String, default: 'active' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
  },
  { timestamps: true }
);

export const AuditEventModel = model<IAuditEvent>('AuditEvent', AuditEventSchema);
