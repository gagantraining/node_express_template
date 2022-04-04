const Router = require("express-promise-router");
const router = Router({ mergeParams: true });
const { verifySession } = require("../middlewares/verifyAuth");

module.exports = () => {
  router.get("/testing", (req, res) => {
    res.send({
      status: 200,
      message: "tested",
    });
  });

  return router;
};
