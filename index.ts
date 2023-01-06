import express from "express";
import db from "./src/main/db/models";

const app = express();
const port = process.env.PORT || 3000;

// const createUsers = () => {
//   users.map((user) => {
//     db.User.create(user);
//   });
// };
// createUsers();

// const createProjects = () => {
//   projects.map((project) => {
//     db.Project.create(project);
//   });
// };
// createProjects();

// const createProjectAssignments = () => {
//   projectassignments.map((projectassignment) => {
//     db.ProjectAssignment.create(projectassignment);
//   });
// };
// createProjectAssignments();

app.get("/", (req, res) => {
  db.User.findAll({
    include: {
      model: db.Project,
    },
  })
    .then((result: object) => res.json(result))
    .catch((err: object) => console.error(err));
});

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
