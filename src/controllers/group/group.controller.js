const Joi = require("joi");
const Groups = require("./model");

const create = async(req, res) => {
    try{
        const  {course_id, is_odd, teacher_id} = req.body;

        const schema = Joi.object({
            course_id: Joi.string().required(),
            is_odd: Joi.boolean().required(),
            teacher_id: Joi.string().required(),
        });

        const {error} = schema.validate({course_id, is_odd, teacher_id});
        if (error) return res.status(400).json({message: error.message});

        await Groups.create(course_id, is_odd, teacher_id);

        return res.status(201).json({message:"Success!"});
    } catch(error){
        console.log(error);
    }
};

const find = async (req, res) => {
    try{
        const teachers = await Groups.find();

        res.status(200).json({message: "Success!", teachers});
    } catch(error){
        console.log(error);
    }
};

module.exports = {
    create,
    find
}