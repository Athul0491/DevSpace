import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

export default User = model("users", UserSchema);
