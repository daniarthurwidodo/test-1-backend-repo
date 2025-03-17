import express, { Express } from 'express';
import { setUserRoutes } from './routes/userRoutes';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
setUserRoutes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});