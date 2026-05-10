import mongoose, { Schema } from 'mongoose';
import { z } from 'zod';

const { MONGO_URI } = process.env;
const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

const EnvSchema = z.object({
  MONGO_URI: z.string(),
  RESEND_KEY: z.string(),
  PROJECT_DOMAIN: z.string(),
  NUXT_SESSION_PASSWORD: z.string()
});
const env = EnvSchema.parse(process.env);

mongoose.connect(`${env.MONGO_URI}`);
mongoose.Promise = global.Promise;
const userSchema = new Schema(
  {
    organization: String,
    role: String,
    category: String,
    qr_code_slug: String,
    total_scans: Number,
    leads_captured: Number,
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    password: String,
    street_address: String,
    city: String,
    country: String,
    postal_code: String,
    reset_password_token: String,
    privacy_policy: Boolean,
    createdAt: String,
    updatedAt: String
  },
  { timestamps: true }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);

export { User as U, connectDB as c };
//# sourceMappingURL=User.mjs.map
