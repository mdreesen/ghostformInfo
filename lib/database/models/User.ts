import mongoose, { Schema } from "mongoose";
import env from "../../env";

mongoose.connect(`${env.MONGO_URI}`);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
    {
        company: String,
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
    }, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;