import moongeose from "mongoose";
const userSchema = new moongeose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilepic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = moongeose.model("User", userSchema);
export default User;
