const {sign} = require("../../utils/jwt")
const Joi = require("joi");
const bcrypt = require("bcrypt");

const login = async(req, res)=>{
    const {useranme, password} = req.body;

    const schema = Joi.object({
        useranme: Joi.string().alphanum().min(5).max(32).required(),
        password: Joi.string().required(),
    });

    const {error} = schema.validate({useranme, password});
    if (error) return res.status(400).json({message: error.message});

    if(useranme !== process.env.admin)
      return res.status(403).json({message: "Incorrect username or password"});

      const verify = await bcrypt.compare(password, process.env.password);

      if(!verify)
        return res.status(403).json({message:"Incorrect username or password"});

    const token = sign({id: 1});

    res.status(200).json({message:"Success", token});

}

module.exports = {
    login,
};