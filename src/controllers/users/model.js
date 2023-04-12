const { fetchOne, fetch} = require("../../utils/pg");

const addUser = `insert into users(user_name, user_phone, user_parents, user_extra_number)values($1, $2, $3, $4)`;
const deleteUser = `delete from users where user_name = $1`;
const getUsers = "select * from users";
const updateUser = "update users set user_id = $1 where user_name = $2";

const create = (name, phone, parents, extra_number) => fetchOne(addUser, name, phone, parents, extra_number);
const deleteU = (user_name) => fetchOne(deleteUser, user_name);
const find = () => fetch(getUsers);
const updateuser = (user_name, user_phone) => fetchOne(updateUser, user_name, user_phone);

module.exports = {
    create, find,
    deleteU, updateuser
};