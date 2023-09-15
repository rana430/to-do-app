import axios from "axios";

const getAllTasks = (setTasks) => {
  axios.get("http://localhost:5000").then(({ data }) => {
    setTasks(data);
  });
};
const addTask = (
  setTasks,
  setTitle,
  title,
  description,
  setDescription,
  dueDate,
  setDueDate
) => {
  axios
    .post("http://localhost:5000/save", { title, description, dueDate })
    .then((response) => {
      console.log(response.data);
      setTitle("");
      setDescription("");
      setDueDate(null);
      getAllTasks(setTasks);
    })
    .catch((error) => {
      console.error("Error adding task:", error);
      if (error.response) {
        // The request was made, but the server responded with a non-2xx status code
        console.error("Server responded with status:", error.response.status);
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error(
          "No response received. The request may not have reached the server."
        );
      } else {
        // Something else went wrong
        console.error("Error:", error.message);
      }
    });
};

const updateTask = (taskId, setTask, title, description, dueDate, setEdit) => {
  axios
    .put(`http://localhost:5000/update/${taskId}`, {
      title,
      description,
      dueDate
    })
    .then((response) => {
      console.log(response.data);
      getAllTasks(setTask);
      setEdit(false);
    })
    .catch((error) => {
      console.error("Error updating task:", error);
    });

  console.log("try to update");
};
const updateStatus = (setTask, status, taskId) => {
  console.log(status);
  axios
    .patch(`http://localhost:5000/update/status/${taskId}`, {
      status,
    })
    .then((response) => {
      console.log(response.data);
      getAllTasks(setTask);
    })
    .catch((error) => {
      console.error("Error updating task:", error);
    });

  console.log("try to update");
};

const deleteTask = ({ taskId, setTasks }) => {
  axios
    .delete(`http://localhost:5000/delete/${taskId}`)
    .then((response) => {
      console.log(response.data);

      getAllTasks(setTasks);
    })
    .catch((e) => console.log("try to delete", e));
};

export { getAllTasks, addTask, updateTask, deleteTask, updateStatus };
