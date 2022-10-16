"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _bodyParser = require("body-parser");
var _express = _interopRequireDefault(require("express"));
var _middleware = require("./middleware");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var API_Router = _express.default.Router();
API_Router.post('/login', (req, res) => {
  if (req.body.username === 'user' && req.body.password === 'password') {
    var data = {
      u_id: '152',
      u_type: 'admin',
      u_name: 'name2'
    };
    res.status(200).json({
      token: (0, _middleware.generateToken)(data)
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
var _default = API_Router;
exports.default = _default;