import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import API_Router from './api';

dotenv.config();
const port = 8001;


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/app/', express.static(path.join(__dirname, '/office_fr/build')));

app.use('/_api', API_Router);


app.get('/app/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/office_fr/build/index.html'));
});

app.get('/', (req, res) => {
  res.send('Hello World!123');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});