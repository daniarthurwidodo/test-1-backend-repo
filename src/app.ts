import express from 'express';
import userRoutes from './routes/userRoutes';
import { db } from './config';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;