const User = require("../models/User");
module.exports.login = async (req, res) => {
    try {
      const { email } = req.params;
      const user = await User.findOne({ email });
      if (user) {
        return res.json({ msg: "success" });
      } else return res.json({ msg: "User with given email not found." });
    } catch (error) {
      return res.json({ msg: "Error user not registered" });
    }
  
  };