const {fetchOne, fetch} = require("../../utils/pg");

const joinGroup = `insert into user_groups(user_id, group_id)values($1, $2)`;
const getGroups= 
   "select * from groups as g inner join courses as c on g.course_id=c.course_id inner join teachers as t on t.teacher_id"
const create = (user_id, group_id) => fetchOne(joinGroup, user_id, group_id);
const find = () => fetch(joinGroup);

module.exports = {
    create, find
}
