const ToDoModel = require("../models/ToDoModel");

const cron = require("node-cron");

const updateIsLateStatus = async () => {
  try {
    const currentDate = new Date();

    const overdueTasks = await ToDoModel.find({
      status: "pending",
      dueDate: { $lt: currentDate },
    });

    if (overdueTasks.length > 0) {
      await Promise.all(
        overdueTasks.map(async (task) => {
          task.isLate = true;
          await task.save();
        })
      );

      console.log("Updated isLate status for overdue tasks.");
    }
  } catch (error) {
    console.error("Error updating isLate status:", error);
  }
};

cron.schedule("0 0 * * *", () => {
  updateIsLateStatus();
});

module.exports.getToDos = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { title, description, dueDate, creationDate, status, isLate } =
    req.body;
  const todomodel = new ToDoModel({
    title: title,
    description: description,
    dueDate: dueDate,
    creationDate: creationDate,
    status: status,
    isLate: isLate,
  });
  try {
    const save = await todomodel.save();
    res.send(save);
  } catch (err) {
    res.status(400).json({
      data: err,
    });
  }
};

module.exports.updateToDo = async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate } = req.body;
  
  try {
    const updatedTodo = await ToDoModel.findByIdAndUpdate(id, {
      title,
      description,
      dueDate,
    });

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.send(updatedTodo);
    console.log(updatedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const updatedTodo = await ToDoModel.findByIdAndUpdate(id, { status });

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.send(updatedTodo);
  } catch (err) {
    console.error("Error updating status:", err); // Log the error for debugging
    res.status(500).json({ message: "Server error" });
  }
};
module.exports.deleteToDo = (req, res) => {
  const { id } = req.params;

  ToDoModel.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};
