const welcomeService = async (a,b) => {
    try {
        let ret = {};
        //do something
        ret.status = 200;
        ret.message = "Some Message";
        return ret;
    } catch (error) {
        ret.status = 400;
        ret.message = "Error"+error.message;
        return ret;
    }
}

module.exports = {
    welcomeService,
}