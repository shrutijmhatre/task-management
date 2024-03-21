import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './db';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

sequelize
  .sync()
  .then(() => {
    console.log('Synced db.');
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_req: Request, res: Response) => {
  try {
    res.status(200).json({
      status: 'success',
      data: [],
      message: 'Welcome to our Booking API homepage!'
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error'
    });
  }
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
