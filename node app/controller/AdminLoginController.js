const {message} = require('../helper/message');
const { AdminLoginService } = require('../services');

class AdminLoginController {
  async adminLogin(req, res) {
    try {
      const queryData = req.body;
      const result = await AdminLoginService.adminlogin(queryData);
      if(result.status===200){

          res.status(201).json({ success: true, message:message.LOGIN_SUCCESSFULL, data: result });
      }else if(result.status===400){
        res.status(201).json({ success: false, message:message.LOGIN_UNSUCCESSFULL});
      }
    } catch (error) {
      res.status(500).json({ success: false, message:message.NOT_FOUND });
    }
  }
  
}

module.exports = new AdminLoginController();
