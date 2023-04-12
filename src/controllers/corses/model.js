const {fetchOne, fetch} = require("../../utils/pg");

const addCourse = `insert into courses(course_name, course_duration)values($1, $2)`;
const getCourses = "select * from courses";

const create  = (name, duration)=> fetchOne(addCourse, name, duration);
const find = () => fetch(getCourses);

module.exports = {
    create,
    find,
};