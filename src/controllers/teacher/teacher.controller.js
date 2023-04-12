const Joi = require("joi");
const Teachers = require("./model");
const {deleteU, updateT} = require("../teacher/model")

const create = async (req, res) =>{
    try{
        const {id} = req.params.id;
        const {name, phone} = req.body;

        const schema = Joi.object({
            name: Joi.string().min(3).max(64).required(),
            phone: Joi.string().max(64).required()
        });

        const {error} = schema.validate({name, phone});
        if (error) return res.status(400).json({message: error.message});

        await Teachers.create(id, name, phone);

        return res.status(200).json({message: "Success!"})
    } catch(error){
        console.log(error);
    }
};

const find = async (req, res) =>{
    try{
        const teachers = await Teachers.find();

        res.status(200).json({message: "Success!", teachers})
    } catch(error){
        console.log(error);
    }
};

const deleteT = async (req, res) =>{
    try{
        const {id} = req.params;
        const { name, phone} = req.body;

        const teacher = await Teachers.find(id);
        if(!teacher) return res.status(404).json({message:"Teacher not found"});
        await Teachers.deleteT( name, phone);

        return res.status(200).json({message: "Success! delete teacher"})
    } catch(error){
        console.log(error);
    }
}

const update = async (req, res) => {
    try{
        const {id} = req.params;
        const {name, phone} = req.body;
        const teacher = await Teachers.find(id);
        if(!teacher) return res.status(404).json({message:"Teacher not found"});
        await Teachers.update(id, name, phone, teacher);
        return res.status(200).json({message:"Success! update teacher"})
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    create,
    find,
    deleteT,
    update,
};