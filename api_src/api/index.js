import { json } from 'body-parser';
import express from 'express';
import { generateToken } from './middleware';

const API_Router = express.Router();

API_Router.post('/login', (req, res) => {
  if (req.body.username === 'user' && req.body.password === 'password') {
    let data = {
      u_id: '152',
      u_type: 'admin',
      u_name: 'name2',
    };
    res.status(200).json({
      token: generateToken(data),
    });
  } else {
    res.status(406).send('inactive/invalid credentials/suspended');
  }
});

API_Router.get('/login', (req, res) => {
  res.send('API12');
});
API_Router.get('/', (req, res) => {
  res.send('API');
});

export default API_Router;
