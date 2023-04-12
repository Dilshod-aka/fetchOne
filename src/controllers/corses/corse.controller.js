const Joi = require("joi");
const Courses = require("./model");

const create =async (req, res) => {
    try{
        const {name, duration} = req.body;
        
        const schema = Joi.object({
            name: Joi.string().min(3).max(255).required(),
            duration: Joi.number().max(48).required(),
        });

        const {error} = schema.validate({name, duration});
        if (error) return res.status(400).json({message: error.message});

        await Courses.create(name, duration);

        return res.status(200).json({message:"Success!"})
    } catch(error){
        console.log(error);
    }
};

const find = async(req, res) => {
    try{
        const courses = await Courses.find();

        res.status(200).json({message: "Success!", courses})
    } catch(error) {
        console.log(error)
    }
}



module.exports = {
    create,
    find,
}