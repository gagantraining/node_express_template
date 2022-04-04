
const verifyToken = async (req, res, next) => {
  const accessTokenEncr = req.headers.authorization;
  const accessToken = decryptToken(accessTokenEncr).token;
  console.log("Inside Cognito Token Verification Middleware");
  try {
    //do something to verify success
    console.log("Token Verification Success");
    next();
  } catch (error) {
    res.json({
      status: 405,
      result: "token mismatch " + error,
    });
  }
};

const verifySession = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log("Inside Session Verification Middleware");
  try{
    if(!token){
      console.log("session token missing please pass as header");
      res.json({
          status: 405,
          result: "session token missing please pass as header"
        });
    }else{
       let resp = await AuthenticationTokens.findOne({id : token});
       if(resp){
          console.log("Session Verification Success");
          next();
       }
       else{
          res.json({
              status: 401,
              result: "session token expired relogin"
            });
       }
    }
  }catch(error){
    console.log("Error in verify Session ",error);
  }

};

module.exports = {
  verifyToken,
  verifySession,
};