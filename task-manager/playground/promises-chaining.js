require("../src/db/mongoose");
const User = require("../src/models/user");
const Task = require("../src/models/task");

// User.findByIdAndUpdate("61b21c6eebcc300e041a28fc", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Task.findByIdAndDelete("61bb05932acc5e6efc14c7d5")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// const updateAgeAndCount = async (id, age) => {
//   const user = await User.findByIdAndUpdate(id, { age });
//   const count = await User.countDocuments({ age });

//   return count;
// };

// updateAgeAndCount("61b2195a34f7c92314f99253", 5)
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("61b211e14e134a0a74100917")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
