import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import blogPostsRouter from './routes/blogPosts.js';

dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Use blog posts routes
app.use('/api', blogPostsRouter);







const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
