const Joi = require("joi");
const GU = require("./model");

const create = async (req, res) =>{
    try{
        const {group_id, user_id} = req.body;

        const schema = Joi.object({
            group_id: Joi.string().uuid().required(),
            user_id: Joi.boolean().required(),
        });

        const {error} = schema.validate({group_id, teacher_id});
        if (error) return res.status(400).json({message: error.message});

        await GU.create(user_id, group_id);

        return res.status(201).json({message:"Success!"});
    } catch(error){
        console.log(error); 
    }
};

const find = async (req, res) => {
    try{
        const groups = await GU.find();

        res.status(200).json({message: "Success!", groups});
    } catch(error){
        console.log(error);
    }
};

module.exports = {
    create,
    find
};