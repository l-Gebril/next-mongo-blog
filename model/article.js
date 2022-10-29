import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
    author: String,
    title: String,
    poster: String,
    topic: String
}, { timestamps: true });

const Article = mongoose.models.article || mongoose.model('article', articleSchema);
export default Article;