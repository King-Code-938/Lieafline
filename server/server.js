import express from 'express';
import mongoose, { connect } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Lieafline API running');
});

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    connected => console.log('MongoDB connected'),
    () => app.listen(PORT, () => console.log(`Server running on ${PORT}`))
  )
  .catch(err => console.error(err));
