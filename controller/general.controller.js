
const {welcomeService} = require("../services/general.services");

const welcomeController = async (req,res) => {
    console.log("Endpoint Welcome Called at ",new Date().toUTCString());
    try {
        let {a,b} = req.body;
        if(!a || !b){
            return res.json({
                status:400,
                message: "Required Params Missing" 
            })
        }else{
            let response = await welcomeService(a,b);
            return res.json(response);
        }
    } catch (error) {
        return res.json({
            status:400,
            message: "Error"+error.message
        })
    }
}

module.exports = {welcomeController};