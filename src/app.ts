import express from 'express';
import bodyParser from 'body-parser';
import inventoryRoutes from './routes/inventoryRoutes';
import inventoryRegistrationRoutes from './routes/inventoryRegistrationRoutes';
import sequelize from './database';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', inventoryRoutes);
app.use('/api', inventoryRegistrationRoutes);

// Sync Database and Start Server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

export default app;
