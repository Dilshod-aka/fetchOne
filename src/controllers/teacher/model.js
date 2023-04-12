const { fetchOne, fetch} = require("../../utils/pg");

const addTeacher = `insert into teachers(teacher_name, teacher_phone)values($1, $2)`;
const deleteTeacher = `delete from teachers where teacher_name = $1`;
const getTeachers = "select * from teachers";
const updateTeacher = "update teachers set teacher_id = $1 where teacher_phone = $2";

const create = (name, phone) => fetchOne(addTeacher, name, phone);
const deleteT = (teacher_name) => fetchOne(deleteTeacher, teacher_name)
const find = () => fetch(getTeachers);
const updateteacher = (teacher_name, phone) => fetchOne(updateTeacher,teacher_name, phone);

module.exports = {
    create, find,
    deleteT, updateteacher
};