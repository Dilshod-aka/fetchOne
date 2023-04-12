const {Router} = require("express");
const {login} = require("../controllers/auth/auth.controller");
const courseController = require("../controllers/corses/corse.controller");
const UsersController = require("../controllers/users/user.controller");
const teacherController = require("../controllers/teacher/teacher.controller");
const groupController = require("../controllers/group/group.controller");

const router = Router();

router.post("/auth/login", login);
router.post("/course", courseController.create);
router.get("/course", courseController.find);
router.post("/user", UsersController.create);
router.get("/users", UsersController.find);
router.delete("/user/:id", UsersController.deleteU);
router.put("/user/:id", UsersController.update);
router.post("/teacher", teacherController.create);
router.delete("/teacher/:id", teacherController.deleteT);
router.put("/teacher/:id", teacherController.update);
router.get("/teachers", teacherController.find);
router.post("/group", groupController.create);
router.get("/groups", groupController.find);


module.exports = router;