import { Schema, model, Document } from 'mongoose';
import { Roles } from '../../common/constants/roles';

export interface IUser extends Document {
  email: string;
  password: string;
  role: typeof Roles[keyof typeof Roles];
  firstName: string;
  lastName: string;
  emailVerified: boolean;
  refreshToken?: string | null;
  passwordResetToken?: string | null;
  passwordResetExpires?: number | null;
  emailVerificationToken?: string | null;
  status: string;
  createdBy: string | null;
  updatedBy: string | null;
  version: number;
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: Object.values(Roles) },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailVerified: { type: Boolean, default: false },
    refreshToken: { type: String, default: null },
    passwordResetToken: { type: String, default: null },
    passwordResetExpires: { type: Number, default: null },
    emailVerificationToken: { type: String, default: null },
    status: { type: String, default: 'active' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    version: { type: Number, default: 1 }
  },
  { timestamps: true }
);

export const UserModel = model<IUser>('User', UserSchema);
