import mongoose, { Schema, Document } from "mongoose";

export interface IArticle extends Document {
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  sourceName: string;
  category: string;
  publishedAt: Date;
  createdAt: Date;
}

const ArticleSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true, unique: true },
  urlToImage: { type: String },
  sourceName: { type: String, required: true },
  category: { type: String, default: "general" },
  publishedAt: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IArticle>("Article", ArticleSchema);
