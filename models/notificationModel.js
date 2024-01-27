import mongoose from "mongoose";

const NotificationSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    seen: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const NotificationModel = mongoose.model("Notifications", NotificationSchema);
export default NotificationModel;
