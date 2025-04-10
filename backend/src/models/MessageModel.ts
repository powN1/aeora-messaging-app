import mongoose from "mongoose";
import type { IMessage } from "../config/interface";
import { ObjectId } from "mongodb";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    conversationId: {
      type: ObjectId,
      required: true,
    },
    text: {
      type: String,
    },
    images: [
      {
        type: String,
      },
    ],
    read: {
      type: Boolean,
    },
    replyingTo: {
      type: ObjectId,
      ref: "Message",
    },
    reactions: [
      {
        emoji: String,
        userId: { type: ObjectId, ref: "User" },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IMessage>("Message", messageSchema);
