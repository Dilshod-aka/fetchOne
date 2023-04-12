const {fetchOne, fetch} = require("../../utils/pg");

const addGroup = `insert into groups(course_id, group_is_odd, teacher_id)values($1, $2, $3)`;
const getGroups = 
"select * from groups as g inner join courses as c on g.course_id=c.course_id inner join teachers as t on t.teacher_id";

const create = (course_id, is_odd, teacher_id) => 
        fetchOne(addGroup, course_name, is_odd, teacher_id);
const find = () => fetch(getGroups);

module.exports = {
    create,
    find
};