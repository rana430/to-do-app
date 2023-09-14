const { Router } = require("express");
const {
  getToDos,
  saveToDo,
  updateToDo,
  deleteToDo,
  updateStatus,
} = require("../controller/ToDoController");

const router = Router();

router.get("/", getToDos);
router.post("/save", saveToDo);
router.put("/update/:id", updateToDo);
router.put("/update/status:id",updateStatus);
router.delete("/delete/:id", deleteToDo);

module.exports = router;