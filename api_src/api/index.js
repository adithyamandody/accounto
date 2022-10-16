import express from 'express';

const API_Router = express.Router();

API_Router.get('/', (req, res) => {
  res.send('API');
});

export default API_Router;
