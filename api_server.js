"use strict";

var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _cors = _interopRequireDefault(require("cors"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _multer = _interopRequireDefault(require("multer"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _api = _interopRequireDefault(require("./api"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
var port = 8001;
var app = (0, _express.default)();
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use('/app/', _express.default.static(_path.default.join(__dirname, '/office_fr/build')));
app.use('/_api', _api.default);
app.get('/app/*', (req, res) => {
  res.sendFile(_path.default.join(__dirname, '/office_fr/build/index.html'));
});
app.get('/', (req, res) => {
  res.send('Hello World!123');
});
app.listen(port, () => {
  console.log("Example app listening on port ".concat(port, "!"));
});