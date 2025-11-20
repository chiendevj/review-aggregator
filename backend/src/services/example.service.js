const  ExampleRepository = require("@repositories/example.repository.js");

const ExampleService = {
  getServerTime: async () => {
    const result = await ExampleRepository.getCurrentTime();
    return result.time;
  },
   listUsers: async () => {
    return await ExampleRepository.getAllUsers();
  },
};
module.exports = ExampleService;