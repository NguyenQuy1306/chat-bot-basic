const { v4: uuidv4 } = require("uuid");
uuidv4();
const users = [
  {
    fistName: "quy",
    lastName: "nguyen",
    age: 25,
    id: "9e04d7fc-7a79-4a70-91e6-39d09ee7148d",
  },
];
exports.createUser = (req, res) => {
  const userId = uuidv4();
  const userwithId = { ...req.body, id: userId };
  users.push(userwithId);
  res.send(users);
};
