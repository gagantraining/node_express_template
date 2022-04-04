const Router = require("express-promise-router");
const router = Router({ mergeParams: true });
const {verifySession} = require("../middlewares/verifyAuth") 

const generalControllers = require("../controller/general.controller");

module.exports = () => {
    router.get("/", (req, res) => {
      res.send({
        status: 400,
        message: "Unauthorised",
      });
    });
  
    router.post("/",verifySession,(req,res) => {
      res.send({
        status: 200,
        message: "Ok",
      });
    })
  
    router.get("/healthCheck", (req, res) => {
      console.log("Endpoint: ", "Health Check Called At: ", new Date().toUTCString());
      res.json({
        status: 200,
        result: "Server is Up And Running at :" + new Date().toUTCString(),
      });
    });
  
    //router.get("/welcome",verifySession)
    router.get("/welcome",generalControllers.welcomeController);
    
    return router;
}