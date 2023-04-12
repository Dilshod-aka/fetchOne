const Joi = require("joi");
const Users = require("./model");

const create = async (req, res) =>{
    try{
        const {name, phone, parents, extra_phone} = req.body;

        const schema = Joi.object({
            name: Joi.string().min(3).max(64).required(),
            phone: Joi.string().max(64).required(),
            parents: Joi.string().max(64).required(),
            extra_phone: Joi.string().max(64).required(),
        });

        const {error} = schema.validate({name, phone, parents, extra_phone});
        if (error) return res.status(400).json({message: error.message});

        await Users.create(name, phone, parents, extra_phone);

        return res.status(200).json({message: "Success!"})
    } catch(error){
        console.log(error);
    }
};

const find = async (req, res) =>{
    try{
        const users = await Users.find();

        res.status(200).json({message: "Success!", users})
    } catch(error){
        console.log(error);
    }
};

const deleteU = async (req, res) =>{
    try{
        const {id} = req.params;
        const { name, phone, parents, extra_phone} = req.body;

        const teacher = await Users.find(id);
        if(!teacher) return res.status(404).json({message:"Teacher not found"});
        await Users.deleteU( name, phone, parents, extra_phone);

        return res.status(200).json({message: "Success! delete teacher"})
    } catch(error){
        console.log(error);
    }
}

const update = async (req, res) => {
    try{
        const {id} = req.params;
        const {name, phone, parents, extra_phone} = req.body;
        const users = await Users.find(id);
        if(!users) return res.status(404).json({message:"User not found"});
        await Users.update( name, phone, parents, extra_phone);
        return res.status(200).json({message:"Success! update user"})
    } catch(error) {
        console.log(error);
    }
}


module.exports = {
    create,
    find,
    update,
    deleteU
};