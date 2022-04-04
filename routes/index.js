const express = require("express");
const router = express.Router();


const testRoutes = require("./test.routes");
const generalRoutes = require("./general.routes");

module.exports = (app) =>
  router
    .get('/health',(req,res) => res.json({status: 200, msg: "test"}))
    .use("/", generalRoutes())
    .use("/test",testRoutes())