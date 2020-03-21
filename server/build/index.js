"use strict";

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _helmet = require("helmet");

var _helmet2 = _interopRequireDefault(_helmet);

var _error = require("./utils/error");

var _userRouter = require("./routes/userRouter");

var _userRouter2 = _interopRequireDefault(_userRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();


var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());
app.use((0, _helmet2.default)());
app.use((0, _morgan2.default)("dev"));

app.get("/", function (req, res) {
  res.status(200).json({ message: "Welcome to node js & Express" });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port 3000");
});

app.use("/", _userRouter2.default);

app.use(function (err, req, res, next) {
  console.log(err); //development!
  (0, _error.handleError)(err, res);
});

_mongoose2.default.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Mongo database is running!");
  }
});
//# sourceMappingURL=index.js.map